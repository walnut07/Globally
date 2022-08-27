// import "./Header.css";
import { useState, useEffect, HtmlHTMLAttributes } from "react";
import AreaMolecule from "../molecules/Form/Area";
import DateMolecule from "../molecules/Form/Date";
import StartTimeMolecule from "../molecules/Form/StartTime";

import "../Style.css";
const axios = require('axios')
const BASE_URL = process.env.REACT_APP_PUBLIC_URL || "http://localhost:8000";

type Props = {
  className?: string,
  title: string,
  inputType: string,
  isOption: boolean
}

const FormMeetingDateOrganism: React.FC<Props> = ({title, inputType, isOption}) => {
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [cityForm, setCityForm] = useState<any>();

  useEffect(() => {
    axios.get(`${BASE_URL}/city/?country=${selectedCountry}`)
    .then((res: any) => {
      const unsortedCities = res.data;
      const sortedCities = unsortedCities.sort();
      setCities(sortedCities);
    })
    .catch((err: any) => {
      console.log(err);
    });
  }, [selectedCountry]);

  // make cities appear once fetching city data
  useEffect(() => {
    const select = 
      <select name={title} className={title}> 
        {cities.map(city => {
          return <option value={city}>{city}</option>
        })}
    </select>
    setCityForm(select);
  }, [cities])

  
  return (
    <div className={"form-meeting-date"}>
      
      <AreaMolecule />
      <DateMolecule />
      <StartTimeMolecule />

    </div>
  );
};

export default FormMeetingDateOrganism;