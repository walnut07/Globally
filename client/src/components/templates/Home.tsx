import Title from "../organisms/Title";
import FormMeetingDate from "../organisms/FormMeetingDate";
import FormTimeZone from "../organisms/FormTimeZone";
import Convert from "../organisms/Convert";
import CopyArea from "../organisms/CopyArea";
import Save from "../organisms/Save";
import "../Style.css";
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
  
  return (
    <div className="home-template">
      <Title />
      <FormMeetingDate />
      <FormTimeZone />
      <Convert setIsTimeConverted={setIsTimeConverted} setConvertedStartTime={setConvertedStartTime} setConvertedEndTime={setConvertedEndTime} setAttendeeAreas={setAttendeeAreas} setUserStartTime={setUserstartTime} setUserEndTime={setUserEndTime} setUserDate={setUserDate} setUserArea={setUserArea} />
      <CopyArea attendeeAreas={attendeeAreas} userDate={userDate} userStartTime={userStartTime} userEndTime={userEndTime} userArea={userArea} convertedStartTimes={convertedStartTimes} convertedEndTimes={convertedEndTimes} isTimeConverted={isTimeConverted} />
      <Save />
    </div>
  );
};

export default Home;