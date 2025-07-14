// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANOmv6T19VvXAzLDoIsKbcBkGXJW86CgM",
  authDomain: "netflixgpt-53ae0.firebaseapp.com",
  projectId: "netflixgpt-53ae0",
  storageBucket: "netflixgpt-53ae0.firebasestorage.app",
  messagingSenderId: "22904881868",
  appId: "1:22904881868:web:7152454bd9b5d8096ef869",
  measurementId: "G-YBWPRHF5Z1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
