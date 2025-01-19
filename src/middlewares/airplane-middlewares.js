const { StatusCodes } = require("http-status-codes");

const validateCreateAirplane = (req, res, next) => {
  if (!req.body.modelNumber) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Something went wrong while creating the airplane",
      data: {},
      error: { explanation: "modelNumber not found in the request" },
    });
  }

  next();
};

module.exports = {
  validateCreateAirplane,
};
