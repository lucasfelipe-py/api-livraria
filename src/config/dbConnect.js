import mongoose from "mongoose";

mongoose.connect(process.env.DB_CONNECTION_STRING);
let conn = mongoose.connection;
// async function connDB() {
//   mongoose.connect(process.env.DB_CONNECTION_STRING);
//   return mongoose.connection;
// }

export default conn;