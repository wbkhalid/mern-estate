// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-53e97.firebaseapp.com",
  projectId: "mern-estate-53e97",
  storageBucket: "mern-estate-53e97.appspot.com",
  messagingSenderId: "477645670189",
  appId: "1:477645670189:web:d309b2c083ee135bcdf5a4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);