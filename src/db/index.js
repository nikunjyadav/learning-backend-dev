import "dotenv/config";
import mongoose from "mongoose";
import { db_name } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      //mongoose.connect() returns a Promise that resolves to a Mongoose connection object.
      `${process.env.DB_URL}/${db_name}` //databse url
    );
    console.log(
      `mongodb connection done, host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("ERROR CONNECTING TO DATABASE:", error);
    process.exit(1); //Calls process.exit(1) → immediately ends the Node.js process with exit code 1 (non-zero means “error”).
  }
};

export default connectDB;
