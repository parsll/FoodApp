import mongoose from "mongoose";
import config from "../config";
const localhost = "mongodb://127.0.0.1/ecommerce";

const db = async () => {
  try {
    await mongoose
      .set("strictQuery", false)
      .connect(config.MONGO_URL as string, {
        retryWrites: true,
        w: "majority",
      });
    console.log("====================================");
    console.log("Database Connection Successful");
    console.log("====================================");
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
};

export default db;
