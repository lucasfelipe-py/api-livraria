import express from "express";
import conn from "./config/dbConnect.js";
import routes from "./routes/index.js";
import errorManipulator from "./middlewares/errorManipulator.js";
import notFoundManipulator from "./middlewares/404Manipulator.js";

conn.on("error", console.log.bind(console, "Erro de conexão"));

conn.once("open", () => {
  console.log("Conexão realizada com sucesso");
});

const app = express();
app.use(express.json());
routes(app);

app.use(notFoundManipulator);

app.use(errorManipulator);

export default app;