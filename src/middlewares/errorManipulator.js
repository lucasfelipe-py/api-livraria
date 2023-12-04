import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function errorManipulator(err, req, res, next) {
  console.log(err);

  if(err instanceof mongoose.Error.CastError) {
    res.status(400).json({ message: "Parâmetro em formato incorreto" });
  } else if (err instanceof mongoose.Error.ValidationError) {
    const errMsgs = Object.values(err.errors)
      .map(err => err.message)
      .join("; ");

    res.status(400).json({ message: `Erros encontrados: ${errMsgs}` });
  }
  else {
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export default errorManipulator;