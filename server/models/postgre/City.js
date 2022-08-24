const knex = require("../../db/knex");

module.exports = {
  get: function (country) {
    return knex.raw('SELECT city FROM "UTC" WHERE "country" = ?', country);
  },
};