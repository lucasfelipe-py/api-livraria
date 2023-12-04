class DefaultError extends Error {
  constructor(msg = "Erro interno do servidor", status = 500) {
    super();
    this.message = msg;
    this.status = status;
  }

  sendResponse(res) {
    res.status(this.status).send({
      mensagem: this.message,
      status: this.status
    });
  }
}

export default DefaultError;