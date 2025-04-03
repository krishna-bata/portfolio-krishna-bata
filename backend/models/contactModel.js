import mongoose from "mongoose";

const { Schema } = mongoose;

const contactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true }, 
});

const contactModel =
  mongoose.models.contact || mongoose.model("contact", contactSchema);

export default contactModel;
