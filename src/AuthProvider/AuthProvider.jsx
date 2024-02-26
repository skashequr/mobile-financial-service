
import { useState,createContext } from "react";
import { auth } from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);
const Authprovider = ({ children }) => {
  const createUser = (email, password) =>{

    return createUserWithEmailAndPassword(auth , email, password);
}
const login = (email, password) =>{
  return signInWithEmailAndPassword(auth, email, password)

}
    const authInfo = {
      createUser,login
      };
      return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      );
    };
    
    export default Authprovider;