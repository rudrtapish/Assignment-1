// import PomodoroTimer from '/PomodoroTimer';
import { useNavigate, BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { auth } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./App.css";
import Login from './Login';

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState(null);
   const navigate = useNavigate();

  useEffect(() => {
    // Set up the onAuthStateChanged listener only once when the component mounts
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

     //Return a function to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
       navigate('/PomodoroTimer');
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
       navigate('/PomodoroTimer');
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <div>
        <h3> Register User </h3>
        <input
          placeholder="Email..."
          value={registerEmail}
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          value={registerPassword}
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={register}> Create User</button>
      </div>

      <div>
        <h3> Login with Google </h3>
        <button onClick={login}> Login with Google</button>
      </div>

      <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button>
    </div>
  );

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="/pomodoro-timer" element={<PomodoroTimer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;


