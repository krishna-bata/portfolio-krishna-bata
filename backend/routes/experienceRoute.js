import express from 'express'
import { addExperience, deleteExperience, getAllExperiences, updateExperience } from '../controllers/experienceController.js';

const experienceRouter = express.Router();

experienceRouter.post('/add',addExperience)
experienceRouter.get('/',getAllExperiences)
experienceRouter.patch('/update/:id',updateExperience)
experienceRouter.delete("/delete/:id", deleteExperience);

export default experienceRouter;