import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import "./Form.css";

type Props = {

}

const AreaMolecule: React.FC<Props>  = ({}) => {
  const [cities, setCities] = useState<string[]>([]);
  const [countries, setCountries] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [cityForm, setCityForm] = useState<any>();

  const BASE_URL = process.env.REACT_APP_PUBLIC_URL || "http://localhost:8000";

  // get country data on initial load
  useEffect(() => {
    axios.get(`${BASE_URL}/country`)
    .then((res: AxiosResponse<any, any>) => {
      const unsortedCountries = res.data;
      const sortedCountries = unsortedCountries.sort();
      setCountries(sortedCountries);
    })
    .catch((err: any) => {
      console.log(err);
    });
  }, []);

  // trigger for getting city data
  const getCity = (e: React.ChangeEvent<HTMLSelectElement>) =>  {
    const country = e.target.value;
    setSelectedCountry(country);
  }

  // fetch city data once a country is selected
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
      <select name="city" className="city-select-atom"> 
        {cities.map(city => {
          return <option value={city}>{city}</option>
        })}
    </select>
    setCityForm(select);
  }, [cities])

  return (
    <div className="area-molecule">
      <label className={"country-label-atom"} htmlFor="area">Country</label>
      <select name="area" onChange={getCity} className={"area-select-atom"}> 
          {countries.map(country => {
            return <option value={country}>{country}</option>
          })}
      </select>

      <label className={"city-label-atom"} htmlFor="city">City</label>
      {cityForm}
    </div>
  );
};

export default AreaMolecule;