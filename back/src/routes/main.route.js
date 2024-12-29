import express from 'express';
import mentorRoute from './allroutes/mentor.route.js'
import authRoute from './allroutes/auth.route.js'
import postRoute from './allroutes/post.route.js'

//--------------router from express js ----------//
const router = express.Router();

router.use('/mentor', mentorRoute);
router.use('/auth', authRoute);
router.use('/post', postRoute)

export default router;