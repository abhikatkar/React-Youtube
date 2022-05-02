
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAkTnrE8SmY7dIiQg1lsVrpShGshzWGASU",
  authDomain: "react--auth-dbf40.firebaseapp.com",
  projectId: "react--auth-dbf40",
  storageBucket: "react--auth-dbf40.appspot.com",
  messagingSenderId: "937066745193",
  appId: "1:937066745193:web:aa13f15a25355f553181f8"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);