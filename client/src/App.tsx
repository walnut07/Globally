import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import FormWrapper from "./components/FormWrapper";
import { useState } from "react";
import moment from "moment";
import Login from "./components/Login";
import firebase from "firebase/compat/app";
import Save from "./components/Save";

function App() {
  const [isDataCollected, setIsDataCollected] = useState<boolean>(false);
  const [copyArea, setCopyArea] = useState<JSX.Element|null>(null);
  const [convertedStartTimes, setConvertedStartTime] = useState<string[]>([]);
  const [convertedEndTimes, setConvertedEndTime] = useState<string[]>([]);
  const [attendeeAreas, setAttendeeAreas] = useState<string[]>([]);
  const [userStartTime, setUserstartTime] = useState<string>("");
  const [userEndTime, setUserEndTime] = useState<string>("");
  const [userArea, setUserArea] = useState<string>("");
  const [userDate, setUserDate] = useState<string>("");
  const [user, setUser] = useState<any>("");
  const [token, setToken] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
      setIsLoggedIn(true);
    })
  }, [])
  
  // module
  const formatTime = (convertedTime: string[], attendeeAreas: string[]) :string =>  {
    const startTime = moment(`${userDate} ${userStartTime}`).format("YYYY-MM-DD hh:mm a");
    const endTime = moment(`${userDate} ${userEndTime}`).format("YYYY-MM-DD hh:mm a");

    let text = `Can we talk in the following time slot? \n\n`;
    text += `${startTime} ~ ${endTime} (${userArea}) \n`;

    for (let i = 0; i < convertedTime.length; i++) {
      const convertedStartTime = moment(convertedStartTimes[i]).format("YYYY-MM-DD hh:mm a");
      const convertedEndTime = moment(convertedEndTimes[i]).format("YYYY-MM-DD hh:mm a");
      text += ` - ${convertedStartTime} ~ ${convertedEndTime}`;
      text += ` (${attendeeAreas[i]}) \n`;
    }

    return text;
  }

  useEffect(() => {
    if (isDataCollected) {
      const formattedStartTime = formatTime(convertedStartTimes, attendeeAreas);
      const copyAreaWrapper = 
        <div className="copyAreaWrapper">
          <textarea value={formattedStartTime} />
        </div>
      setCopyArea(copyAreaWrapper);
    }
  }, [isDataCollected])

  return (

    <div className="App">
      <Header />

      {!isLoggedIn 
        && <Login setUser={setUser} setToken={setToken} setIsLoggedIn={setIsLoggedIn}/>}

      {isLoggedIn 
        && <p>Hi, {user["_delegate"]["displayName"]}!</p>}

      <FormWrapper setIsDataCollected={setIsDataCollected} setConvertedStartTime={setConvertedStartTime} 
        setConvertedEndTime={setConvertedEndTime} setAttendeeAreas={setAttendeeAreas} setUserStartTime={setUserstartTime}
        setUserEndTime={setUserEndTime} setUserDate={setUserDate} setUserArea={setUserArea} 
        />

      {copyArea}

      {isLoggedIn && copyArea !== null && <Save /> }
    </div>
  );
}

export default App;
