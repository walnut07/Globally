import SaveMolecule from "../molecules/Save";
import Login from "../molecules/Login";

type Props = {
  isTimeConverted: boolean,
  convertedStartTimes: string[],
  convertedEndTimes: string[],
  attendeeAreas: string[],
  userDate: string,
  userStartTime: string,
  userEndTime: string,
  userArea: string,
  isLoggedIn: boolean,
  user: any,
  setUser: Function,
  setIsLoggedIn: Function
}

const Save: React.FC<Props>  = ({isTimeConverted, convertedStartTimes, convertedEndTimes, attendeeAreas, 
  userDate, userStartTime, userEndTime, userArea, isLoggedIn, user, setUser, setIsLoggedIn}) => {
  return (
    <>
      {isTimeConverted && isLoggedIn &&
        <SaveMolecule isTimeConverted={isTimeConverted} convertedStartTimes={convertedStartTimes} convertedEndTimes={convertedEndTimes} 
        attendeeAreas={attendeeAreas} userDate={userDate} userStartTime={userStartTime} 
        userEndTime={userEndTime} userArea={userArea} user={user}/>}
      {isTimeConverted && !isLoggedIn &&
        <Login setUser={setUser} setIsLoggedIn={setIsLoggedIn} text={"Log in and save the meeting date"} />}
    </>
  );
};

export default Save;