import mongoose from "mongoose";

const { Schema } = mongoose;

const educationSchema = new Schema({
  college: { type: String, required: true },
  date: { type: String, required: true },
  grade: { type: String, required: true },
  desc: { type: String, required: true },
  degree: { type: String, required: true },
});

const educationModel =
  mongoose.models.education || mongoose.model("education", educationSchema);

export default educationModel;
