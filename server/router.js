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

router.get("/converter", async (req, res) => {
  // parse request
  const body = req.query;
  const country = body.country;
  const city = body.city;
  const date = body.date;
  const startTime = body.startTime;
  const endTime = body.endTime;
  const attendeeCountry = body.attendeeCountry1;
  const attendeeCity = body.attendeeCity1;
  console.log(country, city)
  // get user's timezone
  // const data = await knex.raw(`SELECT "UTCOffset", "isAheadOfUTC" FROM "UTC" WHERE country = ${country} AND city = ${city}` );
  const data = await 
    knex
    .where({
      country: `'${country}'`,
      city: 'Tokyo'
    })
    .select("UTCOffset", "isAheadOfUTC")
    .from("UTC");
  console.log(data);
  // get attendee's timezones
  res.send(data);
})

module.exports = router;