import React from 'react';
import { auth } from './firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {
  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Pomodoro Timer</h1>
      <button onClick={handleLogin} className="bg-blue-500 px-4 py-2 text-white mt-4">Sign in with Google</button>
    </div>
  );
};

export default Login;
