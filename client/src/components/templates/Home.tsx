import Title from "../organisms/Title";
import Login from "../organisms/Login";
import FormMeetingDate from "../organisms/FormMeetingDate";
import FormTimeZone from "../organisms/FormTimeZone";
import Convert from "../organisms/Convert";
import CopyArea from "../organisms/CopyArea";
import Save from "../organisms/Save";
import "./Home.css";
import { useState } from "react";

const Home = () => {
  const [isTimeConverted, setIsTimeConverted] = useState<boolean>(false);
  const [convertedStartTimes, setConvertedStartTime] = useState<string[]>([]);
  const [convertedEndTimes, setConvertedEndTime] = useState<string[]>([]);
  const [attendeeAreas, setAttendeeAreas] = useState<string[]>([]);
  const [userStartTime, setUserstartTime] = useState<string>("");
  const [userEndTime, setUserEndTime] = useState<string>("");
  const [userArea, setUserArea] = useState<string>("");
  const [userDate, setUserDate] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);

  return (

    <div className="home-template">
      <Title />
      <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user} setUser={setUser} text={"Log in with Google"} />
      <FormMeetingDate />
      <FormTimeZone />
      <Convert setIsTimeConverted={setIsTimeConverted} setConvertedStartTime={setConvertedStartTime} setConvertedEndTime={setConvertedEndTime} setAttendeeAreas={setAttendeeAreas} setUserStartTime={setUserstartTime} setUserEndTime={setUserEndTime} setUserDate={setUserDate} setUserArea={setUserArea} />
      <CopyArea attendeeAreas={attendeeAreas} userDate={userDate} userStartTime={userStartTime} userEndTime={userEndTime} userArea={userArea} convertedStartTimes={convertedStartTimes} convertedEndTimes={convertedEndTimes} isTimeConverted={isTimeConverted} />
      <Save isTimeConverted={isTimeConverted} isLoggedIn={isLoggedIn} setUser={setUser} setIsLoggedIn={setIsLoggedIn} user={user} convertedStartTimes={convertedStartTimes} convertedEndTimes={convertedEndTimes} attendeeAreas={attendeeAreas} userDate={userDate} userStartTime={userStartTime} userEndTime={userEndTime} userArea={userArea}/>
    </div>
  );
};

export default Home;