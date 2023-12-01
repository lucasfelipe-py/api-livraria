import express from "express";
import connDB from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conn = await connDB();

conn.on("error", (err) => {
  console.error("Erro de conexão:", err);
});

conn.once("open", () => {
  console.log("Conexão realizada com sucesso");
});

const app = express();
routes(app);

export default app;