// import "./Header.css";
import { useState, useEffect, HtmlHTMLAttributes } from "react";
const axios = require('axios')
const BASE_URL = process.env.PUBLIC_URL || "http://localhost:8000";

type Props = {
  className?: string,
  title: string,
  inputType: string,
  isOption: boolean,
  setCities: string[],
  setCountries: string[],
  setSelectedCountry?: string,
  setCityForm: any
  cities: string[],
  countries: string[],
  selectedCountry: string,
  cityForm: any
}

const Selector: React.FC<Props> = ({title, inputType, isOption, setCities, setCountries, setSelectedCountry, setCityForm,
  cities, countries, selectedCountry, cityForm}) => {
  
  // get country data on initial load
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

  // get city data on change of country selection
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
    <div className={title}>
      <label htmlFor={title}>{title}</label>

      {isOption && 
        <select name={title} onChange={getCity} className={title} value={title}> 
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