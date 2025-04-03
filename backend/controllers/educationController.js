import educationModel from "../models/educationModel.js";

const addEducation = async (req, res) => {
  try {

    const education = new educationModel(req.body);

    await education.save();
    res.json({ success: true, message: "Education added sucessfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const getAllEducation = async (req, res) => {
  try {
    const education = await educationModel.find();
    res.json({ success: true, education });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const updateEducation = async (req, res) => {
  try {
    const { id } = req.params;

    await educationModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ success: true, message: "Education updated sucessfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const deleteEducation = async (req, res) => {
  try {
    const { id } = req.params;

    await educationModel.findByIdAndDelete(id);
    res.json({ success: true, message: "Education deleted sucessfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addEducation,getAllEducation,updateEducation,deleteEducation };
