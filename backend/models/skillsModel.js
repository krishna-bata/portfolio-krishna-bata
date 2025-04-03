import mongoose from "mongoose";

const { Schema } = mongoose;

const skillsSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

const skillsModel =
  mongoose.models.skills || mongoose.model("skills", skillsSchema);

export default skillsModel;