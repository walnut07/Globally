import { useEffect } from "react";
import "./Style.css";
import Header from "./components/Header";
import FormWrapper from "./components/FormWrapper";
import { useState } from "react";
import moment from "moment";
import Login from "./components/Login";
import firebase from "firebase/compat/app";
import Save from "./components/Save";
import Logout from "./components/Logout";


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
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // check login status
  useEffect(() => {
    firebase.auth().onAuthStateChanged( async (user) => {
      if (user) {
        setUser(user);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
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
          <textarea value={formattedStartTime} id="textarea"/>
        </div>
      setCopyArea(copyAreaWrapper);
    }
  }, [isDataCollected])

  return (

    <div className="App">
      <Header />

      {!isLoggedIn 
        && <Login setUser={setUser} setToken={setToken} setIsLoggedIn={setIsLoggedIn} text="Log in with Google"/>}

      {isLoggedIn && user
        && <p>Hi, {user["_delegate"]["displayName"]}!</p>}

      {isLoggedIn
        && <Logout setUser={setUser} setToken={setToken} setIsLoggedIn={setIsLoggedIn}/>}
        
      <FormWrapper setIsDataCollected={setIsDataCollected} setConvertedStartTime={setConvertedStartTime} 
        setConvertedEndTime={setConvertedEndTime} setAttendeeAreas={setAttendeeAreas} setUserStartTime={setUserstartTime}
        setUserEndTime={setUserEndTime} setUserDate={setUserDate} setUserArea={setUserArea} 
        />

      {copyArea}

      {isLoggedIn && copyArea !== null && <Save /> }
      {!isLoggedIn && copyArea !== null && <Login setUser={setUser} setToken={setToken} setIsLoggedIn={setIsLoggedIn} text="Log in and save it" /> }
    </div>
  );
}

export default App;
