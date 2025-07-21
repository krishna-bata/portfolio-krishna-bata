import { v2 as cloudinary } from "cloudinary";
import projectModel from "../models/projectModel.js";

const addProject = async (req, res) => {
  try {
    const { title, date, description, github, link } = req.body;

    const image = req.files.image || req.files.image[0];

    let imageUrl = await cloudinary.uploader.upload(image[0].path, {
      resource_type: "image",
    });

    const project = new projectModel({
      title,
      date,
      description,
      github,
      link,
      image: imageUrl.secure_url,
    });
    await project.save();
    res.json({ success: true, message: "Project added sucessfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const getAllProjects = async (req, res) => {
  try {
    const projects = await projectModel.find().sort({ createdAt: 1 });
    res.json({ success: true, projects });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await projectModel.findById(id);
    res.json({ success: true, project });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const updateProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    await projectModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ success: true, message: "Project updated sucessfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    await projectModel.findByIdAndDelete(id);
    res.json({ success: true, message: "Project deleted sucessfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  addProject,
  getAllProjects,
  getProjectById,
  updateProjectById,
  deleteProject,
};
