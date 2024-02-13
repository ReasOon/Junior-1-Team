// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Auth, getAuth, authService } from "firebase/auth";
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
  appId: "1:324607562576:web:535110fe7d1e0844ef5255",
  measurementId: "G-0XFWM3T7NV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const auth = getAuth(app);
export { app, auth };
firebase.initializeApp(firebaseConfig);
export const authService = getaAuth();