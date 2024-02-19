// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnOH0-2sD-2E__eqT7jFwEEM2kUc6FTBg",
  authDomain: "project-115b0.firebaseapp.com",
  projectId: "project-115b0",
  storageBucket: "project-115b0.appspot.com",
  messagingSenderId: "324607562576",
  appId: "1:324607562576:web:457612fc4c172724ef5255",
  measurementId: "G-S280BPFNRX",
  databaseURL:'https://project-115b0-default-rtdb.asia-southeast1.firebasedatabase.app/'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authService = getAuth();
const auth = getAuth(app);
export { app, auth };