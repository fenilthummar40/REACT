import './App.css'
import React, { useState } from 'react'

function App() {
  const [Product, setProduct] = useState("");
  const [cat, setCat] = useState("");
  const [fullname,setfullname] =useState("");
  const [error,seterror] =useState("");
  const [email,setemail] =useState("");
  const [error2,seterror2] =useState("");
  const [error3,seterror3] =useState("");
  const [phonenumber,setphonenumber] =useState("");



  const handlesubmit = (e) => {
    setCat(e.target.value);
    e.preventDefault();
    if(fullname == ""){
      seterror("input feild in empty");
    }else{
      seterror("");
    }

    if(!email.includes("@")){
      seterror2("email is not valid")
    }else{
      seterror2("")
    }

    if(phonenumber == ""){
      seterror3("phone number is not valid")
      
    }else{
      seterror3("")

      
    }
    
  };

  return ( 
    <>
      <div className='box'onSubmit={handlesubmit}>
        <div className="main">
          <form>
            <div className="hending" >
              <h1>Mobile Recharg</h1>
            </div>
            <div className="a-1" >
              <label>Full Name</label>
              <input type="text" placeholder='Full Name' onChange={(e)=> setfullname(e.target.value)} />
              
          {error && <p>{error}</p>}
            </div>
            <div className="a-1">
              <label>E-mail</label>
              <input type="text" placeholder='E-mail'  onChange={(e)=> setemail(e.target.value)}/>
          {error && <p>{error2}</p>}
            </div>
            <div className="a-1">
              <label>Phone Number</label>
              <input type="text" placeholder='Phone Number'  onChange={(e)=> setphonenumber(e.target.value)} />
              
          {error && <p>{error3}</p>}
            </div>


            <div className="u-1">
              <div className="t1">
                  <h5>Operator</h5>
              </div>
              <div className="t2">
              <select value={cat} onChange={handlesubmit} className='sim' >
                <option value="" disabled>Select Operator</option>
                <option value="air">Airtel DTH</option>
                <option value="jio">Jio DTH</option>
                <option value="vi">VI DTH</option>
                <option value="bpl">BPL DTH</option>
              </select>
              </div>
            </div>

            <div className="u-2">
              <div className="t3">
                  <h5>Customer id</h5>
              </div>
              <div className="t4">
                  <input type="text" placeholder='ID CORD' className='sim1'/>
              </div>
            </div>




            <div className="se">
              <select value={cat} onChange={handlesubmit}className='dd1' >
                <option value="" disabled>Select Amounts</option>
                <option value="year">$3599</option>
                <option value="3-month">$999</option>
                <option value="6-month">$1299</option>
              </select>
            </div>

            <div className="d-1">

              {
                cat === "year" &&
                <>
                  <input type="text" placeholder='Enter Id Name' className='cc1'/>
                  <input type="password" placeholder='Enter Passwoer' className='cc1'/>
                </>
              }

              {
                cat === "3-month" &&
                <>
                  <input type="text" placeholder='Enter Id Name' className='cc1'/>
                  <input type="password" placeholder='Enter Passwoer' className='cc1'/>
                </>
              }

              {
                cat === "6-month" &&
                <>
                  <input type="text" placeholder='Enter Id Name' className='cc1'/>
                  <input type="password" placeholder='Enter Passwoer' className='cc1'/>
                </>
              }
            </div>
            <div className="bu">
              <input type="submit" className='ok'/>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
