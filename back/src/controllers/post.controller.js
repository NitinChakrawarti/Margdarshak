// import fs from 'fs';
// import postSchema from '../models/post.model.js'
// import authService from '../services/auth.service.js'
// import postService from '../services/post.service.js';

// class postController {
//     //-----------create post funtion is here ---------//
//     // async createpost(request, response, next) {
//     //     const { file, body } = request;
//     //     try {

//     //         const newPost = await postService.create(file, body);
//     //         if (newPost.postItem) response.status(200).json(newPost.postItem)

//     //         // return response.status(404).json({ message: "Issue in post creation" })
//     //     }
//     //     catch (err) {
//     //         next(err);
//     //     }
//     // }
//     async createpost(request, response, next) {
//         try {
//             const { originalname, path } = request.file;
//             const parts = originalname.split('.');
//             const ext = parts[parts.length - 1];
//             const newPath = path + '.' + ext
//             fs.renameSync(path, newPath);

//             const { title, summary, content } = request.body;
//             const { logintoken } = request.cookies;
//             const info = await authService.tokenverify(logintoken);

//             const postItem = await postSchema.create(
//                 {
//                     title,
//                     summary,
//                     content,
//                     cover: newPath,
//                     author: info.id
//                 })
//             // response.status(200).json(title, summary, summary, content)
//             response.status(200).json(postItem)
//         }
//         catch (err) {
//             next(err);
//         }
//     }
//     //------------------get all post ---------------------------//
//     async getallpost(request, response, next) {
//         try {
//             const allPost = await postSchema.find({}).populate('author').sort({ createdAt: -1 }).limit(20);
//             return response.status(200).json({ message: "data fetched", data: allPost })
//         }
//         catch (error) {
//             next(error);
//         }
//     }
//     //---------------------post by id fetch ------------------//
//     async postById(request, response, next) {
//         const { id } = request.params
//         try {
//             const postdoc = await postService.getpostById(id);
//             if (postdoc != null) {
//                 return response.status(200).json({ postdoc });
//             }
//             else {
//                 return response.status(404).json({ message: "invalid post id" })
//             }

//         } catch (error) {
//             next(error)
//         }
//     }
//     //-----------------------edit post --------------------//
//     async editPost(request, response, next) {
//         let newPath;
//         if (request.file) {
//             const { originalname, path } = request.file;
//             const parts = originalname.split('.');
//             const ext = parts[parts.length - 1];
//             newPath = path + '.' + ext
//             fs.renameSync(path, newPath);
//         }

//         const { logintoken } = request.cookies;
//         const { _id, title, summary, content } = request.body
//         const info = await authService.tokenverify(logintoken);
//         const postdoc = await postSchema.findById(_id);

//         if (JSON.stringify(postdoc.author) === JSON.stringify(info.id)) {
//             const post = await postSchema.updateOne({
//                 title,
//                 summary,
//                 content,
//                 cover: newPath ? newPath : postdoc.cover
//             })
//             return response.status(200).json(post);
//         }
//         else {
//             return response.status(400).json("you are not the autor of this post");
//         }
//     }
// }
// export default new postController;

import fs from 'fs';
import path from 'path';
import postSchema from '../models/post.model.js';
import authService from '../services/auth.service.js';
import postService from '../services/post.service.js';

const generateUniqueFileName = (originalname) => {
    const timestamp = Date.now();
    const fileExtension = path.extname(originalname);
    return `${timestamp}-${originalname}`;
};

const uploadDirectory = process.env.VERCEL ? '/tmp/uploads' : 'uploads/';
if (!fs.existsSync(uploadDirectory) && !process.env.VERCEL) {
    fs.mkdirSync(uploadDirectory, { recursive: true });
}
class postController {

    //-----------------------------------------create post function ------------------------------  //

    async createpost(request, response, next) {
        try {
            const { originalname, path: tempPath } = request.file;
            if (!tempPath) {
                return response.status(400).json({ message: "No file uploaded." });
            }

            const newFileName = generateUniqueFileName(originalname);
            const newPath = path.join(uploadDirectory, newFileName);

            fs.renameSync(tempPath, newPath);

            const { title, summary, content } = request.body;
            const { logintoken } = request.cookies;
            const info = await authService.tokenverify(logintoken);

            const postItem = await postSchema.create({
                title,
                summary,
                content,
                cover: newPath,
                author: info.id
            });

            response.status(200).json(postItem);
        } catch (err) {
            next(err);
        }
    }

    //------------------get all posts---------------------------//

    async getallpost(request, response, next) {
        try {
            const allPost = await postSchema.find({}).populate('author').sort({ createdAt: -1 }).limit(20);
            return response.status(200).json({ message: "Data fetched", data: allPost });
        } catch (error) {
            next(error);
        }
    }

    //---------------------get post by ID ------------------//
    async postById(request, response, next) {
        const { id } = request.params;
        try {
            const postdoc = await postService.getpostById(id);
            if (postdoc) {
                return response.status(200).json({ postdoc });
            } else {
                return response.status(404).json({ message: "Invalid post ID" });
            }
        } catch (error) {
            next(error);
        }
    }



    //-----------------------edit post --------------------//
    async editPost(request, response, next) {
        let newPath;
        if (request.file) {
            const { originalname, path: tempPath } = request.file;
            if (!tempPath) {
                return response.status(400).json({ message: "No file uploaded." });
            }
            const newFilePath = generateUniqueFileName(originalname);
            newPath = path.join(uploadDirectory, newFilePath); // Store in the correct directory
            fs.renameSync(tempPath, newPath);
        }

        const { logintoken } = request.cookies;
        const { _id, title, summary, content } = request.body;
        const info = await authService.tokenverify(logintoken);
        const postdoc = await postSchema.findById(_id);

        if (JSON.stringify(postdoc.author) === JSON.stringify(info.id)) {
            const post = await postSchema.updateOne(
                { _id },
                {
                    title,
                    summary,
                    content,
                    cover: newPath ? newPath : postdoc.cover
                }
            );
            return response.status(200).json(post);
        } else {
            return response.status(400).json({ message: "You are not the author of this post" });
        }
    }
}

export default new postController;
