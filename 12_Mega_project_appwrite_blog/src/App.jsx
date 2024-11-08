import { useState } from 'react'
import './App.css'
import Signup from './Components/Signip';
import Conf_Env from './Conf_Env/Conf_Env/'
function App() {
  // console.log(Conf_Env);

  return (
    <div>
      <h1>My App</h1>
      <Signup />
    </div>
  )
}

export default App
