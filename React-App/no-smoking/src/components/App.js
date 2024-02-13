import { auth, authService } from "./fbase";
import { GoogleAuthProvider, signInWithPopup, getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect} from "react";
import AppRouter from './compents/Router';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  setInterval(() => console.log(authService.currentUser), 2000);

  useEffect(() =>{
    authService.onAuthStateChanged((user)=>{
      if (user){
        setIsLoggedIn(user);
      } else{
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
    {init ?<AppRouter isLoggedIn={isLoggedIn}/>:"initalizing..."}
    <footer>&copy;{new DataTransfer().getFullYear()}reason</footer>
    </>
  );
}

export default App;