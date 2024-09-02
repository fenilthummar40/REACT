import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Section1 from './Comp/Section1'
import Section2 from './Comp/Section2';
import Section3 from './Comp/Section3';
import Section4 from './Comp/Section4';
import Section5 from './Comp/Section5';
import Section6 from './Comp/Section6';
import Section7 from './Comp/Section7';
import Section8 from './Comp/Section8';
import Section9 from './Comp/Section9';
import Section10 from './Comp/Section10';
import Section11 from './Comp/Section11';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Section7/>
    <Section8/>
    <Section9/>
    <Section10/>
    <Section11/>
    
    </>
  )
}

export default App
