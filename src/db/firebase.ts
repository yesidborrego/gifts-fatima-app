import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWUYmffPvw6jNv5I8Dvr2MSiyvm6IcewI",
  authDomain: "vue-demos-58323.firebaseapp.com",
  databaseURL: "https://vue-demos-58323-default-rtdb.firebaseio.com",
  projectId: "vue-demos-58323",
  storageBucket: "vue-demos-58323.appspot.com",
  messagingSenderId: "885556365274",
  appId: "1:885556365274:web:24839cd6b2f9926eb6a2e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

