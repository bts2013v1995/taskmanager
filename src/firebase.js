// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhamXfmu0hjnXvjYv-T2e65E3ruICiSp8",
  authDomain: "login-de42e.firebaseapp.com",
  databaseURL: "https://login-de42e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "login-de42e",
  storageBucket: "login-de42e.appspot.com",
  messagingSenderId: "427705542432",
  appId: "1:427705542432:web:7d8166f4747e75788ed945",
  measurementId: "G-PRTDDS3PH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app);
