import mongoose from "mongoose";
import DefaultError from "../errors/DefaultError.js";
import IncorrectReq from "../errors/IncorrectReq.js";
import ValidationError from "../errors/ValidationError.js";

// eslint-disable-next-line no-unused-vars
function errorManipulator(err, req, res, next) {
  if(err instanceof mongoose.Error.CastError) {
    new IncorrectReq().sendResponse(res);
  } else if (err instanceof mongoose.Error.ValidationError) {
    new ValidationError(err).sendResponse(res);
  } else if(err instanceof DefaultError) {
    err.sendResponse(res);
  } else {
    new DefaultError().sendResponse(res);
  }
}

export default errorManipulator;