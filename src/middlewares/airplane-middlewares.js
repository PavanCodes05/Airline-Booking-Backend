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

module.exports = {
  validateCreateAirplane,
};
