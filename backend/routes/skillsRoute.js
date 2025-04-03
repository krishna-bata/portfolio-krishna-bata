import express from "express";
import upload from "../middlewares/multer.js";
import {
  addSkill,
  deleteSkill,
  getAllSkills,
  updateSkill,
} from "../controllers/skillsController.js";

const skillsRouter = express.Router();

skillsRouter.post(
  "/add",
  upload.fields([{ name: "image", maxCount: 1 }]),
  addSkill
);

skillsRouter.get("/", getAllSkills);
skillsRouter.patch("/update/:id", upload.any(), updateSkill);
skillsRouter.delete("/delete/:id", deleteSkill);

export default skillsRouter;
