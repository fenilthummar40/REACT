import React, {useState} from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth,db } from '../../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

function SignUp() {

    const [email, setEmail]= useState("");
    const [pass, setPass]= useState("");
    
    // const nevigte= useNavigate();

    const handleSignUp =() =>{  
        createUserWithEmailAndPassword(auth,email,pass)
        .then(data=>{
          const user = data.user;
            console.log(user);
            // nevigte("/Dashbord")  
            
            
            setDoc(doc(db, 'users',user.uid),{
              email:email,
              pass:pass
            })
            .then(() =>{

              console.log('user data stored in fire base');
            })
            .catch((error)=>{
              setError(error.message);
            })
        })
    }
  return (
    <div>
        <h1>SignUp</h1>
        <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='password'  onChange={(e) => setPass(e.target.value)} />
        <button onClick={handleSignUp}>sign up</button>
        <Link to="/login">Login</Link>
        {/* <Link to="/Dashbord">Dashbord</Link> */}
        

    </div>
  )
}

export default SignUp