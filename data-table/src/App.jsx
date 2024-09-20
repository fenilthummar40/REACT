import { useState } from 'react'
import './App.css'
import DataTable from './Comp/DataTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='b-1'>
      <DataTable/>
    </div>
  )
}

export default App
