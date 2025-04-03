import mongoose from "mongoose";

const { Schema } = mongoose;

const projectSchema = new Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  github: { type: String, required: true },
  tags: { type: Array, default: [] },
  link: { type: String, required: true },
});

const projectModel = mongoose.models.project || mongoose.model('project',projectSchema)

export default projectModel
