import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData, updateData } from './feature/CounterSlice';
import './App.css'
import './Style.css'

export default function ReduxExp() {
  const [name,setName] = useState("");
  const [sub,setSub] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const record = useSelector((state) =>{
    return state.Counterkey.data
 })


  const handleAdd = () => {
    if (editIndex !== null) {
      dispatch(updateData({ id: editIndex, name:name, subject:sub }));
      setEditIndex(null);
    } else {
      dispatch(addData({id: Date.now(), name:name,subject:sub }));
    }
    setName("");
    setSub("");
  };
  
   const hadleDelete= (id) =>{
    dispatch(deleteData(id));
   }
   const handeEdit = (id) =>{
    let singleData = record.find((item) => item.id == id);
    if(singleData){
      setName(singleData.name);
      setSub(singleData.subject);
      setEditIndex(id);
    }
   }
   const dispatch = useDispatch();
  return (
    <div className='a-1'>
        <div className="row m-0 p-0">

          <div className="col ccol-lg-6 col-md-6 col-sm-6 col-12">
            <img className='a-2' class="img-fluid" src="https://t3.ftcdn.net/jpg/05/56/29/10/360_F_556291020_q2ieMiOCKYbtoLITrnt7qcSL1LJYyWrU.webp" alt="" />
          </div> 
          <div className="col ccol-lg-6 col-md-6 col-sm-6 col-12 a-3">
          <h1>Redux Crud</h1><br />
          <input type="text" value={name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)}/> <br /><br />
          <input type="text" value={sub} placeholder='Enter Subject' onChange={(e) => setSub(e.target.value)}/> <br /><br />
          <input type="text" value={sub} placeholder='Enter Subject' onChange={(e) => setSub(e.target.value)}/> <br /><br />
          <button onClick={handleAdd}>{editIndex ? "Update " : "Add Data"}</button>
          </div>
        </div>


        {
          record.map((e,i) =>{
            return <ul key={i}>
            <li>id={e.id}&nbsp;&nbsp;</li>
            <li>name={e.name}&nbsp;&nbsp;</li>
            <li>subject={e.subject}&nbsp;&nbsp;</li>
            <button onClick={()=>handeEdit(e.id)}>Edit</button>&nbsp;
            <button onClick={()=>hadleDelete(e.id)}>Delete</button>
            </ul>
          })
        }


    </div>
  )
}
