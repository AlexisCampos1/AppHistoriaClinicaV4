// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUMT0OIWCjlo0DAYtBnl72aTBZTl0ahpk",
  authDomain: "db---v3.firebaseapp.com",
  projectId: "db---v3",
  storageBucket: "db---v3.appspot.com",
  messagingSenderId: "27375646028",
  appId: "1:27375646028:web:6e8324c3569f1fb38a8be9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const
export const db = getDatabase(app);
export const authentication = getAuth(app);