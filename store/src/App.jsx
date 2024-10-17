import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Compo/SignUp'
import Login from './Compo/Login';
import Dashbord from './Compo/Dashbord';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<SignUp/>} ></Route>
      <Route path='/Login' element={<Login/>} ></Route>
      <Route path='/Dashbord' element={<Dashbord/>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
