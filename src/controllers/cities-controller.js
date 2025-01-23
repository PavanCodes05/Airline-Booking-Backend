const { StatusCodes } = require("http-status-codes");

const { CitiesService } = require("../services");
const { SuccessResponse } = require("../utils/errors/common");

const createCity = async (req, res) => {
  try {
    const city = await CitiesService.createCity({
      name: req.body.city,
    });
    console.log(req.body.city);
    console.log("Controller");

    SuccessResponse.data = city;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {}
};

module.exports = {
  createCity,
};
