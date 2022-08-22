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
  // parse user data
  const body = req.query;
  const country = body.country;
  const city = body.city;
  const date = body.date;
  const startTime = body.startTime;
  const endTime = body.endTime;
  const bodyLength = Object.keys(body).length;
  const userInfoLength = 7;

  // parse attendee data
  const attendeeCountryArr = [];
  const attendeeCityArr = [];
  for (let i = 1; i <= bodyLength - userInfoLength; i++) {
    const countryParam = `attendeeCountry${i}`
    const cityParam = `attendeeCity${i}`
    const country = body[countryParam];
    const city = body[cityParam];
    attendeeCountryArr.push(country);
    attendeeCityArr.push(city);
  }

  // get user's timezone
  const userTimeZone = await 
    knex
    .where({
      country: `${country}`,
      city: `${city}`
    })
    .select("UTCOffset", "isAheadOfUTC")
    .from("UTC");

  // get attendee's timezones
  const attendeeTimeZoneArr = [];
  for (let i = 0; i < bodyLength - userInfoLength; i++) {
    const timezone = await 
      knex
      .where({
        country: attendeeCountryArr[i],
        city: attendeeCityArr[i]
      })
      .select("UTCOffset", "isAheadOfUTC")
      .from("UTC");
    attendeeTimeZoneArr.push(timezone);
  }

  res.send([userTimeZone, attendeeTimeZoneArr]);
})

module.exports = router;