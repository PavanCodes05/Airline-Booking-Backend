const { StatusCodes } = require("http-status-codes");
const { Logger } = require("../config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: { id: data },
      });
      return response;
    } catch (error) {
      Logger.error("Something Went Wrong In The Crud Repo: Destroy");
      throw error;
    }
  }

  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      return response;
    } catch (error) {
      Logger.error("Something Went Wrong In The Crud Repo: Get");
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      Logger.error("Something Went Wrong In The Crud Repo: GetAll");
      throw error;
    }
  }

  async update(id, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      Logger.error("Something Went Wrong In The Crud Repo: Update");
      throw error;
    }
  }
}

module.exports = CrudRepository;
