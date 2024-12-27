import { createUserWithEmailAndPassword,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const [loding ,setLoding] = useState(true)

  const name = 'mahabub'

  const createUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password) => {
    setLoding(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  //  sign in with google
  const signInWithGoogle =()=>{
    return signInWithPopup( auth,googleProvider)
  }
  // sign in with githube

  const signInwithGithube =()=>{
   signInWithPopup(auth, githubProvider)

  }


  const signOutUser = () => {
    setLoding(true)
    return signOut(auth);

  }

  // observer 
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('currenty login user', currentUser)
      setUser(currentUser);
      setLoding(false)

    })
    return () => {
      unSubscribe();
    }


  }, [])
  

  const authInfo = {
    user,
    loding,
    createUser,
    signInUser,
    signInWithGoogle,
    signInwithGithube,
    signOutUser
  }



  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;