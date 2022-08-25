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

  const body = req.query;

  const parsedUserData = Converter.parseUserData(body);
  const [country, city, startDate, endDate, attendeeCount] = parsedUserData;
  const [attendeeCountryArr, attendeeCityArr] = Converter.parseAttendeeData(body, attendeeCount);

  if (parsedUserData.some(Converter.hasUndefined)) { // return error if any of request is undefined or empty
    console.log("Empty or undefied in the form");
    res.status(200).send({error: "Please enter the meeting date"});
    return
  }
  
  const userTimeZoneArr = await User.getTimezone(country, city);
  const [userUTCOffset, userIsAheadOfUTC] = Converter.formatAttendeeData(userTimeZoneArr);
  
  let attendeeTimeZoneArr;
  try {
    attendeeTimeZoneArr = await Converter.getAttendeeTimezone(attendeeCount, attendeeCountryArr, attendeeCityArr);
  } catch (err) {
    console.log(err);
    res.status(200).send({error: "Please enter two timezones"});
    return
  }

  const convertedStartTimeArr = Converter.convertTimeZone(attendeeCount, userUTCOffset, userIsAheadOfUTC, startDate);
  const convertedEndTimeArr = Converter.convertTimeZone(attendeeCount, userUTCOffset, userIsAheadOfUTC, endDate);

  res.send({convertedStartTime: convertedStartTimeArr, convertedEndTime: convertedEndTimeArr, attendeeCountry: attendeeCountryArr, attendeeCity: attendeeCityArr});
})

module.exports = router;