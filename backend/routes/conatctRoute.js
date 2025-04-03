import express from "express";
import { addMessage } from "../controllers/contactController.js";

const conatctRouter = express.Router();

conatctRouter.post("/add", addMessage);

export default conatctRouter;
