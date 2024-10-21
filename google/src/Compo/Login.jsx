import React from "react"
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebaseConfig";
// import App from "../App"

export default function Login(){
    const handleLogin=async()=>{
        await signInWithPopup(auth,provider)
        .then(user=>{
            console.log(user);
        })
    }
    return(
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Login With Google</button>
        </div>
    )
}