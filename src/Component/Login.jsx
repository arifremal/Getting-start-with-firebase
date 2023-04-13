import React, { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";

const Login = () => {
  const [user, setUser] = useState([]);
  const auth = getAuth(app);
  console.log(app);
  const provider = new GoogleAuthProvider();
  const handleSignIn = () => {
    // console.log('sign in done');
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedinuser = result.user;
        console.log(loggedinuser);
        setUser(loggedinuser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  const handleout =()=>{
    signOut(auth)
    .then( result =>{
        console.log(result);
        setUser(null)
    })
    .catch( error =>{
        console.log(error);
    })
  }
  return (
    
    <div>
     { user ?
         <button onClick={handleout}>Sign Out</button> :
         <button onClick={handleSignIn}>Google Login</button>
     }
    { user && <div>
        <h2>user{user.displayName}</h2>
        <p>Email: {user.email}</p>
        <img src={user.photoURL} alt="" />
    </div>

    }
    </div>
  );
};

export default Login;
