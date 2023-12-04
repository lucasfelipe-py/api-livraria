import IncorrectReq from "./IncorrectReq.js";

class ValidationError extends IncorrectReq {
  constructor(err) {
    const errMsgs = Object.values(err.errors)
      .map(err => err.message)
      .join("; ");
    super(`Erros encontrados: ${errMsgs}`);
  }
}

export default ValidationError;