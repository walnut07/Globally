const knex = require("../../db/knex");

module.exports = {
  getTimezone: function (country, city) {
    return knex
    .where({
      country: `${country}`,
      city: `${city}`
    })
    .select("UTCOffset", "isAheadOfUTC")
    .from("UTC");
  },
};