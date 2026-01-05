// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKZaB0um6R8bFJMXELxCSrZVJL1lb3T00",
  authDomain: "ecoride1-5a0fe.firebaseapp.com",
  projectId: "ecoride1-5a0fe",
  storageBucket: "ecoride1-5a0fe.firebasestorage.app",
  messagingSenderId: "573965117700",
  appId: "1:573965117700:web:ab5b377781b8cda07ac851",
  measurementId: "G-4ZECP7NW53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);