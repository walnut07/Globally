import LoginMolecule from "../molecules/Login";
import "./Form.css";

type Props = {
  isLoggedIn: boolean,
  setUser: Function,
  setToken: Function,
  setIsLoggedIn: Function,
  text: string
}

const Login: React.FC<Props>  = ({isLoggedIn, setUser, setToken, setIsLoggedIn, text}) => {

  return (
    <div className="Login-organism">
      {!isLoggedIn && <LoginMolecule setUser={setUser} setToken={setToken} setIsLoggedIn={setIsLoggedIn} text={text} /> }
    </div>
  );
};

export default Login;