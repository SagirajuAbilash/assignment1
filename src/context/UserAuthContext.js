import { createContext, useEffect, useState, useContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'

import { auth } from "../firebase";

const userAuthContext = createContext();

  export function UserAuthContextProvider({ children}){


    const [user, setUser]=useState("");


    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function logIn(email, password){

        console.log(email);
        return  signInWithEmailAndPassword(auth, email, password)
       
    }
    function logOut(){
        return signOut(auth)
    }

    function googleSign(){
        const googleAuthProvider= new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider)
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
          setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }
    },[]);
    return (

        <userAuthContext.Provider value={{user, signUp, logIn, logOut, googleSign}}>{children}</userAuthContext.Provider>
    ) 
}

export function UserUserAuth(){
    return(

        useContext(userAuthContext)
    );
}

