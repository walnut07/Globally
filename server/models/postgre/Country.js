const knex = require("../../db/knex");
const UTC_TABLE = "UTC";

// where({column: argument})
module.exports = {
  get: function () {
    return knex.raw('SELECT DISTINCT(country) FROM "UTC"');
  },
};