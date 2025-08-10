import "dotenv/config";
import mongoose from "mongoose";
import { db_name } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_URL}/${db_name}`
    );
    console.log(
      `mongodb connection done, host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("ERROR CONNECTING TO DATABASE:", error);
    process.exit(1);
  }
};

export default connectDB;
