import Selector from "./Selector";
import { useState } from "react";

const FavorableDateContainer= () => {

  const titles = ["Area", "Date", "Start time", "End time"];
  const inputTypes = ["text", "date", "time", "time"];
  const isOptions = [true, false, false, false];

  const [cities, setCities] = useState<string[]>([]);
  const [countries, setCountries] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [cityForm, setCityForm] = useState<any>();

  return (
    <form>
      <Selector title="Area" inputType="text" isOption={true} 
        setCities={setCities} setCountries={setCountries} setSelectedCountry={setSelectedCountry} setCityForm={setCityForm}
        cities={cities} countries={countries} selectedCountry={selectedCountry} cityForm={cityForm}/>
      {/* <Selector title="Date" inputType="date" isOption={false}/>
      <Selector title="Start time" inputType="time" isOption={false}/>
      <Selector title="End time" inputType="time" isOption={false}/> */}
    </form>
  );
};

export default FavorableDateContainer;