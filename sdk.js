// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtCX0CEBsq9uFpcjWauXm9HStVeFRaNaw",
  authDomain: "prototype-notes-beta.firebaseapp.com",
  projectId: "prototype-notes-beta",
  storageBucket: "prototype-notes-beta.appspot.com",
  messagingSenderId: "782513437556",
  appId: "1:782513437556:web:54f449c2cbd35d559e0a21",
  measurementId: "G-V437G35DW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);