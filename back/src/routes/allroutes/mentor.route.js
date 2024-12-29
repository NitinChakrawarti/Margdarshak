import express from "express"
import mentorController from '../../controllers/mentor.controller.js'

const router = express.Router();

router.get('/get-mentor', mentorController.getMentors);
router.post('/add-mentor', mentorController.addMentors);

export default router;