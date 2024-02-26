// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf7UGbNnxwMoztuIzoIgZy27EYe0EKZLM",
  authDomain: "mobile--financial-service.firebaseapp.com",
  projectId: "mobile--financial-service",
  storageBucket: "mobile--financial-service.appspot.com",
  messagingSenderId: "640498588606",
  appId: "1:640498588606:web:363ddab71f606fd96b77ef",
  measurementId: "G-L7NGN7NM13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
