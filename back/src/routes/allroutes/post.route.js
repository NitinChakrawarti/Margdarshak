// import express from 'express'
// import postController from '../../controllers/post.controller.js'
// import multer from 'multer'
// const uploadMiddleware = multer({ dest: 'uploads/' })

// const router = express.Router();

// router.post('/create-post', uploadMiddleware.single('image'), postController.createpost);
// router.get('/get-all-post', postController.getallpost);
// router.get('/:id', postController.postById)
// router.put('/edit-post/:id', uploadMiddleware.single('image'), postController.editPost )

// export default router;



import express from 'express';
import postController from '../../controllers/post.controller.js';
import multer from 'multer';

const uploadDirectory = process.env.VERCEL
    ? '/tmp/uploads'
    : ('uploads/');

const uploadMiddleware = multer({ dest: uploadDirectory });
const router = express.Router();

router.post('/create-post', uploadMiddleware.single('image'), postController.createpost);
router.get('/get-all-post', postController.getallpost);
router.get('/:id', postController.postById);
router.put('/edit-post/:id', uploadMiddleware.single('image'), postController.editPost);

export default router;
