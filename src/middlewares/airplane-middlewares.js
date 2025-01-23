const { StatusCodes } = require("http-status-codes");

const AppError = require("../utils/errors/app-error");
const { ErrorResponse } = require("../utils/errors/common");

const validateCreateAirplane = (req, res, next) => {
  if (!req.body.modelNumber) {
    ErrorResponse.error = new AppError(
      ["modelNumber not found in the request!"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
};

const validateUpdateRequest = (req, res, next) => {
  if (!req.body.data.capacity) {
    ErrorResponse.error = new AppError(
      "You can only update the capacity of the flight",
      StatusCodes.FORBIDDEN
    );
    return res.status(StatusCodes.FORBIDDEN).json(ErrorResponse);
  }

  next();
};

module.exports = {
  validateCreateAirplane,
  validateUpdateRequest,
};
