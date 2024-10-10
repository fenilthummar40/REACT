import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';

function Dashbord() {

    const [user, setUser]= useState("");

    useEffect(() =>{
        onAuthStateChanged(auth,(currentUser) =>{
            if (currentUser){
                console.log(currentUser);
                setUser(currentUser.uid)
            }else{
                setUser("guest")
            }
        })
    },[])

    useEffect(() =>{
        fetchUser()
    },[user])

    const fetchUser = async()=>{
        if(user){
            let data = await getDoc(doc(db, "user",user))
            console.log(data.data());
        }
    }


  return (
    <div>Dashbord</div>
  )
}

export default Dashbord