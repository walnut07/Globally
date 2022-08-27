import axios from "axios";

type Props = {
  setIsTimeConverted: Function,
  setConvertedStartTime: Function,
  setConvertedEndTime: Function
  setAttendeeAreas: Function
  setUserStartTime: Function,
  setUserEndTime: Function,
  setUserDate: Function
  setUserArea: Function,
}

const ConvertMolecule: React.FC<Props>  = ({setIsTimeConverted, setConvertedStartTime, 
  setConvertedEndTime, setAttendeeAreas, setUserStartTime: setUserstartTime, setUserEndTime, setUserDate, setUserArea,}) => {

  const BASE_URL = process.env.REACT_APP_PUBLIC_URL || "http://localhost:8000";
  
  const handleSubmit = () => {
    setIsTimeConverted(false);
    
    const userForm:any = document.forms[0];
    const country = userForm[0].value;
    const city = userForm[1].value;
    const date = userForm[2].value;
    const startTime = userForm[3].value
    const endTime = userForm[4].value
    const area = `${city}, ${country}`
    setUserArea(area);
    setUserDate(date);
    setUserstartTime(startTime);
    setUserEndTime(endTime);

    const attendeeForm:any = document.forms[1];
    const attendeeCountry1 = attendeeForm[0].value;
    const attendeeCity1 = attendeeForm[1].value;
    const attendeeCountry2 = attendeeForm[2].value;
    const attendeeCity2 = attendeeForm[3].value;

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

      // parse and format data
      const attendeeCountries = data["attendeeCountry"];
      const attendeeCities = data["attendeeCity"];
      const areasArr = [];
      for (let i = 0; i < attendeeCountries.length; i++) {
        const area = attendeeCities[i] + ", " + attendeeCountries[i]; // example: "Tokyo, Japan"
        areasArr.push(area);
      }
      setAttendeeAreas(areasArr);

      const convertedStartTimes = data["convertedStartTime"];
      const convertedEndTimes = data["convertedEndTime"];
      setConvertedStartTime(convertedStartTimes);
      setConvertedEndTime(convertedEndTimes);

      setIsTimeConverted(true);
    })
  }

  return (
    <div className="convert-molecule">
      <button type="button" onClick={handleSubmit} className="convert">Convert</button>
    </div>
  );
};

export default ConvertMolecule;