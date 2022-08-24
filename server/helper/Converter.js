const Attendee = require("../models/postgre/Attendee");
const moment = require("moment");

module.exports =  {
  hasUndefined: function (elem) {
    return elem == undefined || elem === "";
  },

  parseAttendee: function (body, attendeeCount) {
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

    return [attendeeCountryArr, attendeeCityArr];
  },

  getAttendeeTimezone: async function (attendeeCount, attendeeCountryArr, attendeeCityArr) {
    const attendeeTimeZoneArr = [];

    for (let i = 0; i < attendeeCount; i++) {
      const timezoneArr = await Attendee.getTimezone(attendeeCountryArr[i], attendeeCityArr[i]);
      if (timezoneArr.length === 0) {
        throw "Please fill in the attendee's timezones";
      }
      const timezone = timezoneArr[0];
      const unformattedUTCOffset = timezone["UTCOffset"];
      const attendeeUTCOffset = moment(unformattedUTCOffset, "HH:mm:ss").format("HH:mm");
      const IsAheadOfUTC = timezone["isAheadOfUTC"];
      attendeeTimeZoneArr.push({UTCOffset: attendeeUTCOffset, IsAheadOfUTC: IsAheadOfUTC});
    }

    return attendeeTimeZoneArr;
  }

};