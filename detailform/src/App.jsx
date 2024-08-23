import './App.css'
import React, { useState } from 'react'

function App() {
  const [Product, setProduct] = useState("");
  const [cat, setCat] = useState("");

  const handleCategoryChange = (e) => {
    setCat(e.target.value);
  };

  return (
    <>
      <div className='box'>
        <div className="main">
          <form>
            <div className="hending">
              <h1>Product Detail</h1>
            </div>
            <div className="a-1">
              <label>Full Name</label>
              <input type="text" placeholder='Full Name' />
            </div>
            <div className="a-1">
              <label>E-mail</label>
              <input type="text" placeholder='E-mail' />
            </div>
            <div className="a-1">
              <label>Phone Number</label>
              <input type="text" placeholder='Phone Number' />
            </div>

            <div className="se">
              <select value={cat} onChange={handleCategoryChange}>
                <option value="" disabled>Select Product</option>
                <option value="watch">laptop</option>
                <option value="mobile">mobile</option>
                <option value="headphone">AC</option>
              </select>
            </div>
            <div className="d-1">
              <input 
                type="text" 
                placeholder='Enter Product Name' 
                onChange={(e) => setProduct(e.target.value)}  
              />

              {
                cat === "watch" &&
                <>
                  <input type="text" placeholder='Enter Warranty'/>
                  <input type="text" placeholder='Enter Price'/>
                </>
              }

              {
                cat === "mobile" &&
                <>
                  <input type="text" placeholder='Enter Warranty'/>
                  <input type="text" placeholder='Enter Price'/>
                </>
              }

              {
                cat === "headphone" &&
                <>
                  <input type="text" placeholder='Enter Warranty'/>
                  <input type="text" placeholder='Enter Price'/>
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
