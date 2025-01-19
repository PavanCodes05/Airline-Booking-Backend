const { AirplaneRepository } = require("../repositories");

const airplaneRepository = new AirplaneRepository();

const createAirplane = async (data) => {
  try {
    const response = await airplaneRepository.create(data);
    return response;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createAirplane,
};
