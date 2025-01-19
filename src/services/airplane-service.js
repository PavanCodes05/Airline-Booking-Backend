const { StatusCodes } = require("http-status-codes");

const { AirplaneRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const airplaneRepository = new AirplaneRepository();

const createAirplane = async (data) => {
  try {
    const response = await airplaneRepository.create(data);
    return response;
  } catch (error) {
    if (error.name == "SequelizeValidationError") {
      let messages = [];
      error.errors.forEach((err) => {
        messages.push(err.message);
      });
      let appError = new AppError(messages, StatusCodes.BAD_REQUEST);
      console.log(appError);
      throw appError;
    }

    throw new AppError(error.name, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

module.exports = {
  createAirplane,
};
