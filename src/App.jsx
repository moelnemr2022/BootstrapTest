import { useState } from 'react'

import { Route,Routes,Link } from 'react-router-dom'
import './App.css'
import Navbar from './componante/navbar'
import Home from './componante/Home'
import About from './componante/About'
import Customers from './componante/Customers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={
      <>
      <Home/>
      
      </>

      }/>
      <Route path='/About' element={<About/>}/>
  <Route path='/Customers' element={<Customers/>}/>
  </Routes>
    
      
     
    </>
  )
}

export default App
