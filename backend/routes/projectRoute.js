import express from "express";
import upload from "../middlewares/multer.js";
import { addProject, deleteProject, getAllProjects, getProjectById, updateProjectById } from "../controllers/projectController.js";

const projectRouter = express.Router();

projectRouter.post(
  "/add",
  upload.fields([{ name: "image", maxCount: 1 }]),
  addProject
);
projectRouter.get('/',getAllProjects)
projectRouter.get("/:id", getProjectById);
projectRouter.patch("/update/:id",upload.none(), updateProjectById);
projectRouter.delete("/delete/:id", deleteProject);


export default projectRouter;
