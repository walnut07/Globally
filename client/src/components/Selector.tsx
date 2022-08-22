// import "./Header.css";
import { useState, useEffect, HtmlHTMLAttributes } from "react";
const axios = require('axios')
const BASE_URL = process.env.PUBLIC_URL || "http://localhost:8000";

type Props = {
  className?: string,
  title: string,
  inputType: string,
  isOption: boolean
}

const Selector: React.FC<Props> = ({title, inputType, isOption}) => {
  const [cities, setCities] = useState<string[]>([]);
  const [countries, setCountries] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [cityForm, setCityForm] = useState<any>();
  
  // get country data
  useEffect(() => {
    axios.get(`${BASE_URL}/country`)
    .then((res: any) => {
      const unsortedCountries = res.data;
      const sortedCountries = unsortedCountries.sort();
      setCountries(sortedCountries);
    })
    .catch((err: any) => {
      console.log(err);
    });
  }, []);

  const getCity = (e: any) =>  {
    const country = e.target.value;
    setSelectedCountry(country);
  }

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

  useEffect(() => {
    const select = 
      <select name={title} className={title}> 
        {cities.map(country => {
          return <option value={country}>{country}</option>
        })}
    </select>
    setCityForm(select);
  }, [cities])

  
  return (
    <div className={title}>
      <label htmlFor={title}>{title}</label>

      {isOption && 
        <select name={title} onChange={getCity} className={title}> 
          {countries.map(country => {
            return <option value={country}>{country}</option>
          })}
        </select>
      }
      
      {isOption && cityForm}

      {!isOption && 
        <input type={inputType} name={title}/>
      }

    </div>
  );
};

export default Selector;