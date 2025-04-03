import mongoose from "mongoose";

const connectToDatabase = async () => {
  await mongoose.connect(`${process.env.MONGODB_URL}/portfolio`);
  console.log("Database connected successfully");
};

export default connectToDatabase;
