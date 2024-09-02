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
              <h1>Product Detail</h1>
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
                    <div className="date">
                        <h5>Birth Date</h5>
                    </div>
                    <div className="d-tayp">
                    <select value={cat} onChange={handlesubmit} className='bb1'>
                      <option value="" disabled>Month</option>
                      <option value="jan">Jan</option>
                      <option value="feb">Feb</option>
                      <option value="mar">Mar</option>
                      <option value="apr">Apr</option>
                      <option value="may">May</option>
                      <option value="jun">Jun</option>
                      <option value="jul">Jul</option>
                      <option value="aug">Aug</option>
                      <option value="sep">Sep</option>
                      <option value="oct">Oct</option>
                      <option value="nav">Nav</option>
                      <option value="dec">Dec</option>
                    </select>

                    <select value={cat} onChange={handlesubmit} className='bb1'>
                      <option value="" disabled>day</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">11</option>
                      <option value="11">10</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>

                    <select value={cat} onChange={handlesubmit} className='bb1'>
                      <option value="" disabled>Year</option>
                      <option value="2010">2010</option>
                      <option value="2011">2011</option>
                      <option value="2012">2012</option>
                      <option value="2013">2013</option>
                      <option value="2014">2014</option>
                      <option value="2015">2015</option>
                      <option value="2016">2016</option>
                      <option value="2017">2017</option>
                      <option value="2018">2018</option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                    </select>
                    </div>
              </div>
              <div className="t2">
                  <div className="gender">
                    <h5>Gender</h5>
                  </div>
                  <div className="g-tayp">
                  <select value={cat} onChange={handlesubmit} className='g1'>
                      <option value="" disabled>Please Select</option>
                      <option >Male</option>
                      <option >Female</option>
                      <option >N/A</option>
                    </select>
                  </div>
              </div>
            </div>




            <div className="se">
              <select value={cat} onChange={handlesubmit}className='dd1' >
                <option value="" disabled>Select Product</option>
                <option value="watch">Electronic</option>
                <option value="mobile">Fashion</option>
                <option value="headphone">Grocery</option>
              </select>
            </div>

            <div className="d-1">

              {
                cat === "watch" &&
                <>
                  <input type="text" placeholder='Enter Produc' className='cc1'/>
                  <input type="text" placeholder='Enter Warranty' className='cc1'/>
                  <input type="text" placeholder='Enter Price' className='cc1'/>
                </>
              }

              {
                cat === "mobile" &&
                <>
                  <input type="text" placeholder='Enter Produc' className='cc1'/>
                  <input type="text" placeholder='Enter Warranty' className='cc1'/>
                  <input type="text" placeholder='Enter Price' className='cc1'/>
                </>
              }

              {
                cat === "headphone" &&
                <>
                  <input type="text" placeholder='Enter Produc' className='cc1'/>
                  <input type="text" placeholder='Enter Warranty' className='cc1'/>
                  <input type="text" placeholder='Enter Price' className='cc1'/>
                </>
              }
            </div>
            <div className="bu">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
