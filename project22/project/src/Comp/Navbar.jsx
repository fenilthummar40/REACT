import React from 'react'
import './style.css'

function Navbar() {
  return (
   <>

   <div className="header">
    <div className="logo">
        <h2>w<span>atch</span></h2>
    </div>

    <ul>
        <li><a href="">About</a></li>
        <li><a href="">Service</a></li>
        <li><a href="">Home</a></li>
        <li><a href="">Product</a></li>
    </ul>
   </div>
   </>
  )
}

export default Navbar