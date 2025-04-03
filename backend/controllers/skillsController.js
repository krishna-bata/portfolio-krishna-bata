import { v2 as cloudinary } from "cloudinary";
import skillsModel from "../models/skillsModel.js";

const addSkill = async (req, res) => {
  try {
    const { name } = req.body;

    const image = req.files.image || req.files.image[0];

    let imageUrl = await cloudinary.uploader.upload(image[0].path, {
      resource_type: "image",
    });

    const skill = new skillsModel({
      name,
      image: imageUrl.secure_url,
    });

    await skill.save();
    res.json({ success: true, message: "Skill added sucessfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const getAllSkills = async (req, res) => {
  try {
    const skills = await skillsModel.find();
    res.json({ success: true, skills });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const updateSkill = async (req, res) => {
  try {
    const { id } = req.params;

    await skillsModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ success: true, message: "Skill updated sucessfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;

    await skillsModel.findByIdAndDelete(id);
    res.json({ success: true, message: "Skill deleted sucessfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addSkill, getAllSkills, updateSkill, deleteSkill };
