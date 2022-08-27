import firebase from 'firebase/compat/app';
import {auth} from "../../services/firebase"
import "../Style.css";

type Props = {
  setUser: Function,
  setIsLoggedIn: Function,
  text: string
}

const LoginMolecule: React.FC<Props> = ({setUser, setIsLoggedIn, text}) => {

  const logInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const result: any = await auth.signInWithPopup(provider);
    const user = result.user;
    setUser(user);
    setIsLoggedIn(true);
}
  return (
    <div className='login-molecule'>
      <button className="login-button" onClick={logInWithGoogle}>{text}</button>
    </div>
  )
}

export default LoginMolecule;