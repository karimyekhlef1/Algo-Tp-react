import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Flow from './component/Flow'
import GetData from './api/GetData'
import Test from './component/test'
import Vehicles from './component/Vehicles'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Vehicles/> */}
     <GetData/>

    </>
  )
}

export default App
