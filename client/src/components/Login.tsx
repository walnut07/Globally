// import { signInWithGoogle } from '../services/firebase';
import firebase from 'firebase/compat/app';
import {auth} from "../services/firebase"
import "../Style.css";

type Props = {
  setUser: Function,
  setToken: Function,
  setIsLoggedIn: Function,
  text: string
}

const Login: React.FC<Props> = ({setUser, setToken, setIsLoggedIn, text}) => {

  const logInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const result: any = await auth.signInWithPopup(provider);
    const token = result.credential.accessToken;
    const user = result.user;
    setToken(token);
    setUser(user);
    setIsLoggedIn(true);
}
  return (
    <div className='login-div'>
      <button className="login-button" onClick={logInWithGoogle}>{text}</button>
    </div>
  )
}

export default Login;