// import "./Header.css";
import axios from "axios";
import FavorableDateContainer from "./FavorableDateContainer";
import AttendeeTimeZoneContainer from "./AttendeeTimeZoneContainer";

const BASE_URL = process.env.PUBLIC_URL || "http://localhost:8000";

const FormWrapper = () => {
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
        attendeeCity1: attendeeCity1
      }
    })
    .then((res) => {
      console.log(res);
    })
  }

  return (
    <section className="date-selector-wrapper">
      <h2>Your favorable time:</h2>
        <FavorableDateContainer />
      <h2>Where the attendees are:</h2>
        <AttendeeTimeZoneContainer />
        <button type="button" onClick={handleSubmit}>Submit</button>
    </section>
  );
};

export default FormWrapper;