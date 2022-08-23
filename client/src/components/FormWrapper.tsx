// import "./Header.css";
import axios from "axios";
import UsersDateContainer from "./UsersDateContainer";
import AttendeeTimeZoneContainer from "./AttendeeTimeZoneContainer";
import { useEffect, useState } from "react";

const BASE_URL = process.env.PUBLIC_URL || "http://localhost:8000";


type Props = {
  setIsDataCollected: Function,
  setConvertedStartTime: Function,
  setConvertedEndTime: Function
  setAttendeeAreas: Function
}
const FormWrapper: React.FC<Props>= ({setIsDataCollected, setConvertedStartTime, setConvertedEndTime, setAttendeeAreas}) => {

  const handleSubmit = () => {
    const userForm = document.forms[0];
    const country = userForm.Area[0].value;
    const city = userForm.Area[1].value;
    const date = userForm.Date.value;
    const startTime = userForm["Start time"].value;
    const endTime = userForm["End time"].value;

    const attendeeForm = document.forms[1];
    const attendeeCountry1 = attendeeForm.Area[0].value;
    const attendeeCity1 = attendeeForm.Area[1].value;
    const attendeeCountry2 = attendeeForm.Area[2].value;
    const attendeeCity2 = attendeeForm.Area[3].value;

    axios.get(`${BASE_URL}/converter`, {
      params: {
        country: country,
        city: city,
        date: date,
        startTime: startTime,
        endTime: endTime,
        attendeeCountry1: attendeeCountry1,
        attendeeCity1: attendeeCity1,
        attendeeCountry2: attendeeCountry2,
        attendeeCity2: attendeeCity2
      }
    })
    .then((res) => {
      const data = res.data;

      const attendeeCountries = data["attendeeCountry"];
      const attendeeCities = data["attendeeCity"];
      const areasArr = [];
      for (let i = 0; i < attendeeCountries.length; i++) {
        const area = attendeeCountries[i] + " " + attendeeCities[i];
        areasArr.push(area);
      }
      setAttendeeAreas(areasArr);
      // console.log(attendearea)
      const convertedStartTimes = data["convertedStartTime"];
      const convertedEndTimes = data["convertedEndTime"];
      setConvertedStartTime(convertedStartTimes);
      setConvertedEndTime(convertedEndTimes);

      setIsDataCollected(true);
    })
  }

  return (
    <section className="form-wrapper">
      <h2>Your favorable time:</h2>
        <UsersDateContainer />
      <h2>Where the attendees are:</h2>
        <AttendeeTimeZoneContainer />
        <button type="button" onClick={handleSubmit}>Submit</button>
    </section>
  );
};

export default FormWrapper;