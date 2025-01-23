const CrudRepository = require("./crud-repository");
const { cities } = require("../models/");

class CitiesRepository extends CrudRepository {
  constructor() {
    super(cities);
  }
}

module.exports = CitiesRepository;
