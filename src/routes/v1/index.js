const express = require("express");
const router = express.Router();

const airplaneRoutes = require("./airplane-routes");
const citiesRoutes = require("./cities-routes");

router.use("/airplanes", airplaneRoutes);
router.use("/cities", citiesRoutes);

module.exports = router;
