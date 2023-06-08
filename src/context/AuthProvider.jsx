import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const updateUser = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // get and set token
      // if (currentUser) {
      //   axios
      //     .post("http://localhost:5000/jwt", { email: currentUser.email })
      //     .then((data) => {
      //       // console.log(data.data.token)
      //       localStorage.setItem("access-token", data.data.token);
      //       setLoading(false);
      //     });
      // } else {
      //   localStorage.removeItem("access-token");
      // }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const logout = () => {
    return signOut(auth);
  };

  const userInfo = {
    user,
    setUser,
    signup,
    login,
    googleLogin,
    updateUser,
    logout,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
