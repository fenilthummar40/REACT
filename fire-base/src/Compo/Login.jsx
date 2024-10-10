import { signInWithEmailAndPassword } from 'firebase/auth';
import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseConfig';

function Login() {
    const [email, setEmail]= useState("");
    const [pass, setPass]= useState("");
    const [error, setError]= useState("");

    const nevigte= useNavigate();


    const handleLogIn =()=>{
        signInWithEmailAndPassword(auth,email,pass)
        .then (data=>{
            console.log(data);
            nevigte("/Dashbord")

        })

        .catch((error)=>{
          setError(error.message);
        })
    }
  return (
    <div>
        <h1>Login</h1>
        <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='password' onChange={(e) => setPass(e.target.value)} />
        <button onClick={handleLogIn}>Login</button>
        <Link to="/">SignUp</Link>
        {/* <Link to="/Dashbord">Dashbord</Link> */}
        
    </div>
  )
}

export default Login