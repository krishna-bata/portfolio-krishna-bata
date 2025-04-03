import experienceModel from "../models/experienceModel.js";

const addExperience = async (req,res) => {
    try {
        const experience = new experienceModel(req.body)
        await experience.save();
        res.json({ success: true, message: "Experience added successfully" });
    } catch (error) {
        res.json({success:false,message:error.message})
        console.log(error);
    }
}

const getAllExperiences = async (req, res) => {
  try {
    const experiences = await experienceModel.find();
    res.json({ success: true, experiences });
  } catch (error) {
    res.json({ success: false, message: error.message });
    console.log(error);
  }
};

const updateExperience = async (req, res) => {
  try {
    const {id} = req.params
    await experienceModel.findByIdAndUpdate(id,req.body,{new:true})
    res.json({ success: true, message: "Experience updated successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
    console.log(error);
  }
};

const deleteExperience = async (req, res) => {
  try {
    const {id} = req.params;
    await experienceModel.findByIdAndDelete(id);
    res.json({ success: true, message: "Experience deleted successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
    console.log(error);
  }
};

export {addExperience,getAllExperiences,updateExperience,deleteExperience}