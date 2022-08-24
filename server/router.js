const router = require("express").Router();
const knex = require("./db/knex");
const moment = require("moment");
const mongoose = require('mongoose');
const Converter = require("./helper/Converter");

// ---- models ----- //

const Country = require("./models/postgre/Country");
const City = require("./models/postgre/City");
const User = require("./models/postgre/User");
const Attendee = require("./models/postgre/Attendee");

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
    return
  } finally {
    if (country.length === 0) {
      res.status(202).send("No country matched");
      return
    }
  }
  
  const countries = country["rows"].map(row => {
    return row["country"];
  })
  res.status(200).send(countries);
})

router.get("/city", async (req, res) => {
  const country = req.query.country;

  let city;
  try {
    city = await City.get(country);
  } catch (err) {
    const errorMessage = {message: "Error happened when getting city data", error: err};
    res.status(202).send(errorMessage);
  } 
  if (city.length === 0) {
    res.status(202).send(["No city matched"]);
    return
  }
  if (country == undefined) {
    res.status(202).send(["Country undefined"]);
    return
  }

  const cities = city["rows"].map(row => {
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

  const reqArr = [country, city, date, startTime, endTime, attendeeCount];  
  if (reqArr.some(Converter.hasUndefined)) { // return error if any of requests is undefined or empty
    console.log("Empty or undefied in the form");
    res.status(200).send({error: "Please fill in the form"});
    return
  }

  const [attendeeCountryArr, attendeeCityArr] = Converter.parseAttendee(body, attendeeCount);

  // get user's timezone
  const userTimeZoneArr = await User.getTimezone(country, city);
  const userTimeZone = userTimeZoneArr[0];
  const unformattedUTCOffset = userTimeZone["UTCOffset"];
  const userUTCOffset = moment(unformattedUTCOffset, "HH:mm:ss").format("HH:mm");
  const userIsAheadOfUTC = userTimeZone["isAheadOfUTC"];

  let attendeeTimeZoneArr;
  try {
    attendeeTimeZoneArr = await Converter.getAttendeeTimezone(attendeeCount, attendeeCountryArr, attendeeCityArr);
  } catch (err) {
    console.log(err);
    res.status(200).send({error: "Please fill in the form"});
    return
  }
  console.log()
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