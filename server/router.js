const router = require("express").Router();
const knex = require("./db/knex");
const moment = require("moment");
const mongoose = require('mongoose');
const country = require("./models/postgre/country");

// ---- models ----- //

const Country = require("./models/postgre/Country");


// const Dates = require('./models/mongo/Dates');

// ----- mongodb ------ //

// mongoose.connect('mongodb://127.0.0.1/dates');

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'DB connection error:'));
// db.once('open', () => console.log('DB connection successful'));

// ---------------------- //

router.get("/", (req, res) => {
  res.status(200).send("This is Globally server");
})

router.get("/country", async (req, res) => {
  let country;
  try {
    country = await Country.get();
  } catch (err) {
    const errorMessage = {message: "Error happened when getting country data", error: err};
    res.status(202).send(errorMessage);
  } finally {
    if (country.length === 0) {
      res.status(202).send("No country matched");
    }
  }
  
  const countries = country["rows"].map(row => {
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
  const attendeeCount = 2
  let startDate = new Date(date + " " + startTime);
  let endDate = new Date(date + " " + endTime);
  startDate = moment(startDate).format("LLL"); // example: August 20, 2022 1:31 PM
  endDate = moment(endDate).format("LLL");

  // return error if any of requests is undefined
  const hasUndefined = (elem) => {
    return elem == undefined;
  }
  const reqArr = [country, city, date, startTime, endTime, attendeeCount];
  if (reqArr.some(hasUndefined)) {
    res.send({error: "Please fill in the form"});
    return
  }

  // parse attendee data
  const attendeeCountryArr = [];
  const attendeeCityArr = [];
  for (let i = 1; i <= attendeeCount; i++) {
    const countryParam = `attendeeCountry${i}`
    const cityParam = `attendeeCity${i}`
    const country = body[countryParam];
    const city = body[cityParam];
    attendeeCountryArr.push(country);
    attendeeCityArr.push(city);
  }

  // get user's timezone
  let userTimeZone = await 
    knex
    .where({
      country: `${country}`,
      city: `${city}`
    })
    .select("UTCOffset", "isAheadOfUTC")
    .from("UTC");
  userTimeZone = userTimeZone[0];
  let userUTCOffset = userTimeZone["UTCOffset"];
  userUTCOffset = moment(userUTCOffset, "HH:mm:ss").format("HH:mm");
  const userIsAheadOfUTC = userTimeZone["isAheadOfUTC"];

  // get attendee's timezones
  const attendeeTimeZoneArr = [];
  for (let i = 0; i < attendeeCount; i++) {
    let timezone = await 
      knex
      .where({
        country: attendeeCountryArr[i],
        city: attendeeCityArr[i]
      })
      .select("UTCOffset", "isAheadOfUTC")
      .from("UTC");
    timezone = timezone[0];
    const UTCOffset = timezone["UTCOffset"];
    const momentUTCOffset = moment(UTCOffset, "HH:mm:ss").format("HH:mm");
    const IsAheadOfUTC = timezone["isAheadOfUTC"];
    attendeeTimeZoneArr.push({UTCOffset: momentUTCOffset, IsAheadOfUTC: IsAheadOfUTC});
  }
 
  // convert the start/end time into different time zones

  // module
  const converter = (attendeeCount, convertedTimeArr, attendeeTimeZoneArr, userUTCOffset, userIsAheadOfUTC, startOrEndDate) => {
    for (let i = 0; i < attendeeCount; i++) {
      const attendeeTimeZoneObj = attendeeTimeZoneArr[i];
      const attendeeUTCOffset = attendeeTimeZoneObj["UTCOffset"];
      const attendeeIsAheadOfUTC = attendeeTimeZoneObj["IsAheadOfUTC"];

      let attendeeStartDate = startOrEndDate;
      if (userIsAheadOfUTC && attendeeIsAheadOfUTC) {
        attendeeStartDate = moment(attendeeStartDate).subtract(moment(userUTCOffset, "HH:mm").hours(), "hour");
        attendeeStartDate = moment(attendeeStartDate).add(moment(attendeeUTCOffset, "HH:mm").hours(), "hour");
      } else if (userIsAheadOfUTC && !attendeeIsAheadOfUTC) {
        attendeeStartDate = moment(attendeeStartDate).subtract(moment(userUTCOffset, "HH:mm").hours(), "hour");
        attendeeStartDate = moment(attendeeStartDate).subtract(moment(attendeeUTCOffset, "HH:mm").hours(), "hour");
      } else if (!userIsAheadOfUTC && attendeeIsAheadOfUTC) {
        attendeeStartDate = moment(attendeeStartDate).add(moment(userUTCOffset, "HH:mm").hours(), "hour");
        attendeeStartDate = moment(attendeeStartDate).add(moment(attendeeUTCOffset, "HH:mm").hours(), "hour");
      } else if (!userIsAheadOfUTC && !attendeeIsAheadOfUTC) {
        attendeeStartDate = moment(attendeeStartDate).add(moment(userUTCOffset, "HH:mm").hours(), "hour");
        attendeeStartDate = moment(attendeeStartDate).subtract(moment(attendeeUTCOffset, "HH:mm").hours(), "hour");
      }

    convertedTimeArr.push(attendeeStartDate);

    }
  }

  // convert start times
  const convertedStartTimeArr = [];
  converter(attendeeCount, convertedStartTimeArr, attendeeTimeZoneArr, userUTCOffset, userIsAheadOfUTC, startDate);

  // convert end times
  const convertedEndTimeArr = [];
  converter(attendeeCount, convertedEndTimeArr, attendeeTimeZoneArr, userUTCOffset, userIsAheadOfUTC, endDate);

  res.send({convertedStartTime: convertedStartTimeArr, convertedEndTime: convertedEndTimeArr, attendeeCountry: attendeeCountryArr, attendeeCity: attendeeCityArr});
})

module.exports = router;