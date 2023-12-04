import express from "express";
import connDB from "./config/dbConnect.js";
import routes from "./routes/index.js";
import errorManipulator from "./middlewares/errorManipulator.js";

const conn = await connDB();

conn.on("error", (err) => {
  console.error("Erro de conexão:", err);
});

conn.once("open", () => {
  console.log("Conexão realizada com sucesso");
});

const app = express();
app.use(express.json());
routes(app);

// eslint-disable-next-line no-unused-vars
app.use(errorManipulator);

export default app;