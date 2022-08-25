const Attendee = require("../models/postgre/Attendee");
const moment = require("moment");

module.exports =  {
  hasUndefined: function (elem) {
    return elem == undefined || elem === "";
  },

  parseUserData: function (body) {
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

    return [country, city, startDate, endDate, attendeeCount];
  },

  parseAttendeeData: function (body, attendeeCount) {
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
      const timeZoneArr = await Attendee.getTimezone(attendeeCountryArr[i], attendeeCityArr[i]);
      if (timeZoneArr.length === 0) {
        throw "Please fill in the attendee's timezones";
      }
      const timezone = timeZoneArr[0];
      const unformattedUTCOffset = timezone["UTCOffset"];
      const attendeeUTCOffset = moment(unformattedUTCOffset, "HH:mm:ss").format("HH:mm");
      const IsAheadOfUTC = timezone["isAheadOfUTC"];
      attendeeTimeZoneArr.push({UTCOffset: attendeeUTCOffset, IsAheadOfUTC: IsAheadOfUTC});
    }

    return attendeeTimeZoneArr;
  },

  formatAttendeeData: function(userTimeZoneArr) {
    const userTimeZone = userTimeZoneArr[0];
    const unformattedUTCOffset = userTimeZone["UTCOffset"];
    const userUTCOffset = moment(unformattedUTCOffset, "HH:mm:ss").format("HH:mm");
    const userIsAheadOfUTC = userTimeZone["isAheadOfUTC"];

    return [userUTCOffset, userIsAheadOfUTC];
  },

  convertTimeZone: function(attendeeCount, attendeeTimeZoneArr, userUTCOffset, userIsAheadOfUTC, startOrEndDate) {
    const convertedTimeArr = [];

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

    return convertedTimeArr;
  }

};