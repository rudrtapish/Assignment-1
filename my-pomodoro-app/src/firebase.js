import { initializeApp } from "firebase/app"; 
import firebase from 'firebase/app';
import  'firebase/auth';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDclya5HacxRdrPKguUJ1XWSuMO8bcTrDw",
    authDomain: "my-pomodoro-app-cb7ef.firebaseapp.com",
    projectId: "my-pomodoro-app-cb7ef",
    storageBucket: "my-pomodoro-app-cb7ef.appspot.com",
    messagingSenderId: "26806982793",
    appId: "1:26806982793:web:7871c7fee05605f4894e58",
    measurementId: "G-E1YS7RQ1EJ"
  };

const app = initializeApp(firebaseConfig);

//  firebase.initializeApp(firebaseConfig);

 export const auth = getAuth(app);
