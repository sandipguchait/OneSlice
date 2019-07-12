import { useEffect, useState } from 'react';
const auth = window.firebase.auth();
const provider = new window.firebase.auth.GoogleAuthProvider();

export const useAuthentication = () => {
  const [authenticated, setAuthenticated] = useState('loading...')

  //Login Logic
  const login = () => {
    auth.signInWithPopup(provider);
  };

  //Logout logic
  const logOut = () => {
    auth.signOut()
        .then(() => console.log('SignOut Successful'))
        .catch((error) => console.log(error))
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        setAuthenticated(user);
      } else {
        //In case User Logs out
        setAuthenticated();
      }
    },(error) => {
      console.log(error)
    })
  }, []);

  return { login, loggedIn: authenticated, logOut };
}