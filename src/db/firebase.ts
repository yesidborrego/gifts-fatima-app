// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWqvkmuESXGAhQtQGbNJmeVWL5wiNEMAU",
  authDomain: "gift-list-48d96.firebaseapp.com",
  projectId: "gift-list-48d96",
  storageBucket: "gift-list-48d96.appspot.com",
  messagingSenderId: "1084021956402",
  appId: "1:1084021956402:web:7ef99d4e95782e2f49012b",
  measurementId: "G-8PJSC9Z1ZH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);