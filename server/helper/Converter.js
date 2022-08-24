
module.exports = {
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
  }
};