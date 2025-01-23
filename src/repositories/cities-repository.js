const cities = require("../models/cities");
const CrudRepository = require("./crud-repository");

class CitiesRepository extends CrudRepository {
  constructor() {
    super(cities);
  }
}

module.exports = CitiesRepository;
