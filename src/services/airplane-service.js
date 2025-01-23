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

const getAirplanes = async () => {
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    throw new AppError(error.name, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

const getAirplane = async (id) => {
  try {
    const airplane = await airplaneRepository.get(id);
    return airplane;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The Requested Flight is Not Found!",
        error.statusCode
      );
    }
    throw new AppError(error.name, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

const deleteAirplane = async (id) => {
  try {
    const response = await airplaneRepository.destroy(id);
    return response;
  } catch (error) {
    throw new AppError("The requested flight is not found", error.statusCode);
  }
};

const updateAirplane = async (id, data) => {
  try {
    const airplane = await airplaneRepository.update(id, data);
    return airplane;
  } catch (error) {
    throw new AppError(
      "The requested flight for updating is not found",
      StatusCodes.NOT_FOUND
    );
  }
};

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  deleteAirplane,
  updateAirplane,
};
