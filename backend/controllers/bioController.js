import { v2 as cloudinary } from "cloudinary";
import bioModel from "../models/bioModel.js";

const addBio = async (req, res) => {
  try {
    const {
      name,
      resume,
      insta,
      description,
      github,
      roles,
      linkedin,
      email,
      phone,
    } = req.body;

    const image = req.files.image || req.files.image[0];

    let imageUrl = await cloudinary.uploader.upload(image[0].path, {
      resource_type: "image",
    });

    const bio = new bioModel({
      name,
      resume,
      description,
      github,
      linkedin,
      insta,
      roles,
      image: imageUrl.secure_url,
      email,
      phone,
    });

    await bio.save();
    res.json({ success: true, message: "Bio added sucessfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const getBioData = async (req, res) => {
  try {
    const bio = await bioModel.find();
    res.json({ success: true, bio: bio[0] });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const updateBioData = async (req, res) => {
  try {
    const { id } = req.params;
    await bioModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ success: true, message: "Bio updated sucessfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const deleteBioData = async (req, res) => {
  try {
    const { id } = req.params;
    await bioModel.findByIdAndDelete(id);
    res.json({ success: true, message: "Bio deleted sucessfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addBio, getBioData, updateBioData, deleteBioData };
