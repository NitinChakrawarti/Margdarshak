import express from 'express'
import authController from '../../controllers/auth.controller.js'

const router = express.Router();

router.post('/sign-up', authController.signUp);
router.post('/user-login', authController.login);
router.get('/profile', authController.profilecheck);

export default router;