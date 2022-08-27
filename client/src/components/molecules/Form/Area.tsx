import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import "./Form.css";

type Props = {
  setSelectedCountry: Function,
}

const AreaMolecule: React.FC<Props>  = ({setSelectedCountry}) => {
  const [countries, setCountries] = useState<string[]>([]);
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

  const getCity = (e: React.ChangeEvent<HTMLSelectElement>) =>  {
    const country = e.target.value;
    setSelectedCountry(country);
  }

  return (
    <label className={"area-molecule"} htmlFor="area">

      <select name="area" onChange={getCity} className={"area-atom"}> 
          {countries.map(country => {
            return <option value={country}>{country}</option>
          })}
      </select>

    </label>
  );
};

export default AreaMolecule;