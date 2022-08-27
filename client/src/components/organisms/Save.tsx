import SaveMolecule from "../molecules/Save";
import Login from "../molecules/Login";

type Props = {
  isTimeConverted: boolean,
  isLoggedIn: boolean,
  setUser: Function,
  setIsLoggedIn: Function
}

const Save: React.FC<Props>  = ({isTimeConverted, isLoggedIn, setUser, setIsLoggedIn}) => {
  return (
    <>
      {isTimeConverted && isLoggedIn &&
        <SaveMolecule isTimeConverted={isTimeConverted}/>}
      {isTimeConverted && !isLoggedIn &&
        <Login setUser={setUser} setIsLoggedIn={setIsLoggedIn} text={"Log in and save the meeting date"} />}
    </>
  );
};

export default Save;