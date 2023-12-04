import DefaultError from "./DefaultError.js";

class NotFound extends DefaultError {
  constructor(msg = "Página não encontrada") {
    super(msg, 404);
  }
}

export default NotFound;