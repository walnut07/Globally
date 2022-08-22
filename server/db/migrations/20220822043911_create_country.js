/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable("UTC", function (table) {
    table.increments("id").primary(); 
    table.string("country", 100).notNullable();
    table.string("city", 100);
    table.time("UTCOffset");
    table.boolean("isAheadOfUTC");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('UTC');
};
