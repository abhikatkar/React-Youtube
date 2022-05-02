
import {auth} from "./Configs";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";


import React from 'react'


export function SignIn() {


    



    function signInWithGmail(){
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
         .then((re)=>{
             console.log(re)
         })
         .catch((err)=>{
             console.log(err)
         })
    }

  return (
    <div>
    <h1 > Sign in page</h1> 
    <button onClick={signInWithGmail}>sign-in with Gmail</button> 
    </div>
  )
}
