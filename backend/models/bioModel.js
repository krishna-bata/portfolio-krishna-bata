import mongoose from "mongoose";

const { Schema } = mongoose;

const bioSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  resume: { type: String, required: true },
  github: { type: String, required: true },
  roles: { type: Array, required: true },
  linkedin: { type: String, required: true },
  insta: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

const bioModel =
  mongoose.models.bio || mongoose.model("bio", bioSchema);

export default bioModel;
