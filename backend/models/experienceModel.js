import mongoose from "mongoose";

const {Schema} = mongoose;

const experienceSchema = new Schema({
  role: { type: String, required: true },
  company: { type: String, required: true },
  date: { type: String, required: true },
  desc: { type: Array, required: true },
  skills: { type: Array, required: true },
});

const experienceModel = mongoose.models.experience || mongoose.model('experience',experienceSchema)

export default experienceModel;