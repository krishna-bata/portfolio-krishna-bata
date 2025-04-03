import contactModel from "../models/contactModel.js";

const addMessage = async (req, res) => {
  try {
    const contact = await contactModel.create(req.body);
    res.json({ success: true, contact });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error });
  }
};

export { addMessage };
