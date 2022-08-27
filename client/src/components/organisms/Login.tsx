import LoginMolecule from "../molecules/Login";

type Props = {
  isLoggedIn: boolean,
  setIsLoggedIn: Function,
  user: any,
  setUser: Function,
  text: string
}

const Login: React.FC<Props>  = ({isLoggedIn, setIsLoggedIn, user, setUser, text}) => {

  return (
    <div className="Login-organism">
      {!isLoggedIn && <LoginMolecule setUser={setUser} setIsLoggedIn={setIsLoggedIn} text={text} /> }
      {isLoggedIn && user && <p>Hi, {user["_delegate"]["displayName"]}!</p>}
    </div>
  );
};

export default Login;