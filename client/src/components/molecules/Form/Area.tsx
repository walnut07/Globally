import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import "./Form.css";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <Form.Select name="city" className="city-select-atom" size="sm"> 
        {cities.map(city => {
          return <option value={city}>{city}</option>
        })}
    </Form.Select>
    setCityForm(select);
  }, [cities])

  return (
    <div className="area-molecule">
      <Form.Group className="mb-3">
        <Form.Label className={"country-label-atom"} htmlFor="area">Country</Form.Label>
        <Form.Select name="area" onChange={getCity} className={"area-select-atom"} size="sm"> 
            {countries.map(country => {
              return <option value={country}>{country}</option>
            })}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className={"city-label-atom"} htmlFor="city">City</Form.Label>
        {cityForm}
      </Form.Group>
    </div>
  );
};

export default AreaMolecule;