import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import ReduxExp from './ReduxExp'
import { store } from './App/Store'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Provider store={store}>
      <ReduxExp/>
    </Provider>
  </div>
  )
}

export default App
