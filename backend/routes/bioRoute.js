import express from "express";
import upload from "../middlewares/multer.js";
import { addBio, deleteBioData, getBioData, updateBioData } from "../controllers/bioController.js";

const bioRouter = express.Router();

bioRouter.post("/add", upload.fields([{ name: 'image', maxCount: 1 }]), addBio);
bioRouter.get('/',getBioData)
bioRouter.patch("/update/:id",upload.any(), updateBioData);
bioRouter.delete("/delete/:id", deleteBioData);

export default bioRouter;
