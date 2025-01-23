const { CitiesRepository } = require("../repositories/");

const citiesRepository = new CitiesRepository();

const createCity = async (data) => {
  try {
    const response = await citiesRepository.create(data);
    console.log("Service");

    return response;
  } catch (error) {}
};

module.exports = {
  createCity,
};
