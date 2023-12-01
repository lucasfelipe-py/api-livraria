import mongoose from "mongoose";

async function connDB() {
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  return mongoose.connection;
}

export default connDB;