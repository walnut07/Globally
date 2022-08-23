import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import FormWrapper from "./components/FormWrapper";
import { useState } from "react";
import moment from "moment";

function App() {
  const [isDataCollected, setIsDataCollected] = useState<boolean>(false);
  const [copyArea, setCopyArea] = useState<JSX.Element|null>(null);
  const [convertedStartTimes, setConvertedStartTime] = useState<string[]>([]);
  const [convertedEndTime, setConvertedEndTime] = useState<string[]>([]);

  // module
  const formatTime = (convertedTime: string[]) :string =>  {
    let result = "Can we talk in the following time slot? \n";
    for (let i = 0; i < convertedTime.length; i++) {
      const converted = moment(convertedStartTimes[i]).format("YYYY-MM-DD hh:mm");
      console.log(converted)
      result += converted;
      result += " ( )"

    }

    return result;
  }

  useEffect(() => {
    if (isDataCollected) {
      const formattedStartTime = formatTime(convertedStartTimes);
      const copyAreaWrapper = 
        <div className="copyAreaWrapper">
          <textarea value={formattedStartTime}></textarea>
        </div>
      setCopyArea(copyAreaWrapper);
    }
  }, [isDataCollected])

  return (

    <div className="App">
      <Header />
      <FormWrapper setIsDataCollected={setIsDataCollected} setConvertedStartTime={setConvertedStartTime} 
        setConvertedEndTime={setConvertedEndTime}/>
      {copyArea && copyArea}
    </div>
  );
}

export default App;
