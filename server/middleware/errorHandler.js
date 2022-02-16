import ErrorResponse from "../utills/errorResponse.js";

const errorHandler = (err, req, res, next) => {
  console.log(err);

  let error = { ...err };

  error.message = err.message;

  if (err.name === "CastError") {
    const message = "Resource not found";
    error = new ErrorResponse(message, 404);
  }

  if (err.statusCode === 11000) {
    const message = "Duplicate field va;lue entered";
    error = new ErrorResponse(message, 400);
  }

  if (err.name === "ValidationError") {
    const message = Object.values(err.errors)
      .map((error) => error.message)
      .join(", ");
    error = new ErrorResponse(message, 400);
  }

  //add more check
  res.status(error.statusCode || 500).join({
    success: false,
    error: error.message || "Server Error",
  });
};

export default errorHandler;
