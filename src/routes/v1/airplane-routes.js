const express = require("express");
const router = express.Router();

const { AirplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares");

router.post(
  "/",
  AirplaneMiddlewares.validateCreateAirplane,
  AirplaneController.createAirplane
);

router.get("/", AirplaneController.getAirplanes);

module.exports = router;
