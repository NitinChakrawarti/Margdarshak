import axios from 'axios';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

import 'react-quill/dist/quill.snow.css';

export const AddBlog = () => {
    const [blogpost, setBlogPost] = useState({
        title: '',
        summary: '',
        content: '',
        image: null,
    });
    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' },
            ],
            ['link', 'image'],
            ['clean'],
        ],
    };

    const navigate =  useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(blogpost.image);
        try {
            const formData = new FormData();
            formData.append('title', blogpost.title);
            formData.append('summary', blogpost.summary);
            formData.append('content', blogpost.content);
            if (blogpost.image) {
            formData.append('image', blogpost.image); // Include image if present
            }
            const post = await axios.post(
                `${import.meta.env.VITE_USER_API}/post/create-post`,
                formData,{
                    withCredentials:true
                }
            );
            if (post.status == 200) {
                alert('Post created successfully!');
                navigate('/blog')
            }

            setBlogPost({
                title: '',
                summary: '',
                content: '',
                image: null,
            });
        } catch (error) {
            console.error('Error creating post:', error);
            alert('Failed to create post. Please try again.');
        }
    };

    return (
        <div className="container mx-auto px-4 md:px-8">
            <div className="flex justify-between items-center pb-6 mt-10 shadow-sm py-2">
                <h1 className="text-2xl md:text-3xl font-bold">Add Blog</h1>
            </div>
            <div className="w-full">
                <form
                    className="flex flex-col gap-6 bg-white shadow-md rounded-lg p-4 md:p-8"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={blogpost.title}
                        onChange={(e) =>
                            setBlogPost((prev) => ({ ...prev, title: e.target.value }))
                        }
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                    />
                    <input
                        type="text"
                        placeholder="Summary"
                        name="summary"
                        value={blogpost.summary}
                        onChange={(e) =>
                            setBlogPost((prev) => ({ ...prev, summary: e.target.value }))
                        }
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                    />
                    <input
                        type="file"
                        onChange={(e) =>
                            setBlogPost((prev) => ({ ...prev, image: e.target.files[0] }))
                        }
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
                    />
                    <ReactQuill
                        value={blogpost.content}
                        onChange={(value) =>
                            setBlogPost((prev) => ({ ...prev, content: value }))
                        }
                        modules={modules}
                        className=" md:h-40 mb-12"
                    />
                    <button
                        type="submit"
                        className="w-full bg-yellow-600 hover:bg-yellow-700 transition font-semibold text-white text-lg py-2 rounded-md"
                    >
                        Create Post
                    </button>
                </form>
            </div>
        </div>
    );
};

