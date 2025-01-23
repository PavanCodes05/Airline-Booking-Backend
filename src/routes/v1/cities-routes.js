const express = require("express");
const router = express.Router();

const { CitiesController } = require("../../controllers");

router.post("/", CitiesController.createCity);

module.exports = router;
