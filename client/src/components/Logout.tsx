import firebase from 'firebase/compat/app';

type Props = {
  setUser: Function
  setToken: Function
  setIsLoggedIn: Function
}

const Logout: React.FC<Props> = ({setUser, setToken, setIsLoggedIn}) => {

  const logoutOfoogle = async () => {
    firebase.auth().signOut()
      .then(() => {
        console.log("logged out!");
        setUser(null);
        setToken(null);
        setIsLoggedIn(false);
      }).catch((error) => {
        console.log("error");
      });
}
  return (
    <div>
      <button className="button" onClick={logoutOfoogle}><i className="logout-button"></i>Sign out</button>
    </div>
  )
}

export default Logout;