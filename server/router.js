const router = require("express").Router();
const knex = require("./db/knex");

router.get("/", (req, res) => {
  res.status(200).send("This is Globally server");
})

router.get("/country", async (req, res) => {
  const data = await knex.raw('SELECT DISTINCT(country) FROM "UTC"');
  const countries = data["rows"].map(row => {
    return row["country"];
  })
  
  res.status(200).send(countries);
})

router.get("/city", async (req, res) => {
  const country = req.query.country;
  const data = await knex.raw('SELECT city FROM "UTC" WHERE "country" = ?', country);
  const cities = data["rows"].map(row => {
    return row["city"];
  });

  res.status(200).send(cities);
})

module.exports = router;