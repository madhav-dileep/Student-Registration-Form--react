import { useState } from 'react'
import './App.css'
import Landing from './Landing'
import Form from './Form'


function App() {

  const [initialState,setInitialState] = useState(true)

  return (
    <>
      { 
        initialState ? <Landing setInitialState={setInitialState}/> : <Form/>  
      }  
    </>
  )
}

export default App
