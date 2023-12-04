import DefaultError from "./DefaultError.js";

class IncorrectReq extends DefaultError {
  constructor(msg = "Um ou mais dados fornecidos estão incorretos") {
    super(msg, 400);
  }
}

export default IncorrectReq;