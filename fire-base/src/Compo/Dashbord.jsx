import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig';
import { getDoc, doc, collection, updateDoc, deleteDoc, addDoc, getDocs } from 'firebase/firestore';


function Dashbord() {

    const [user, setUser]= useState("");
    const [email, setEmail]= useState("");
    const [pass, setPass]= useState("");

    const [record,setrecord] = useState([])
    const [ editIndex,setEditIdex] =useState(null)

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
        fetchData()
    },[user])

    const fetchUser = async()=>{
        if(user){
            let data = await getDoc(doc(db, "user",user))
            console.log(data.data());   
        }
    }

    const fetchData = async () =>{
        let data = await getDocs(collection(db, "users"))
        console.log(data);
        let newData = data.docs.map((item) =>({docId: item.id, ...item.data()}))
        console.log(newData);
        setrecord(newData) 
    }

    const addData =async()=>{
        if(editIndex == null){
            await addDoc(collection(db,"users"),{
                email,pass
            })
        }else{
            await updateDoc(doc(db,"users", editIndex),{email,pass})
        }
                fetchData()
                setEditIdex(null)
                setEmail("")
                setPass("")

    }

    const deleteData = async (docId) =>{
        await deleteDoc(doc(db,"users",docId));
        let deleteRecord = record.filter((item)=>item.docId != docId);
        setrecord(deleteRecord)
    }

    const editData =(docId) =>{
        let singleData = record.find((item)=> item.docId == docId);
        setEmail(singleData.email)
        setPass(singleData.pass)
        setEditIdex(docId)
    }
  return (
    
    <div>
    <h1>Dashborrd</h1>
    <input type="text" placeholder='email' value={email} onChange={(e) =>setEmail(e.target.value)} />
    <input type="text" placeholder='password' value={pass} onChange={(e) =>setPass(e.target.value)} />
    <button onClick={addData}>{editIndex == null ? "Add" :"Update"}</button>

    {
      record &&
      record.map((e, i) => {
        return (
          <ul key={i} className="record-list">
            <li className="record-item">{e.email}</li>
            <li className="record-item">{e.pass}</li>
            <button className="edit-btn" onClick={() => editData(e.docId)}>Edit</button>
            <button className="delete-btn" onClick={() => deleteData(e.docId)}>Delete</button>
          </ul>
        );
      })
    
    }
    </div>
  )
}

export default Dashbord