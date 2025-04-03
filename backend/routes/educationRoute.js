import express from "express";
import { addEducation, deleteEducation, getAllEducation, updateEducation } from "../controllers/educationController.js";

const educationRouter = express.Router();

educationRouter.post("/add", addEducation);
educationRouter.get("/", getAllEducation);
educationRouter.patch("/update/:id", updateEducation);
educationRouter.delete("/delete/:id", deleteEducation);

export default educationRouter;
