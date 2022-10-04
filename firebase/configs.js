// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASEsH0OoUE9K2-Ns6B1c_krB-29omhKRk",
  authDomain: "dogroc-d0976.firebaseapp.com",
  databaseURL: "https://dogroc-d0976-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dogroc-d0976",
  storageBucket: "dogroc-d0976.appspot.com",
  messagingSenderId: "662149846349",
  appId: "1:662149846349:web:2c1c3d7b76946fb3071304",
  measurementId: "G-R4VL6YBWP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export {app, database} ;