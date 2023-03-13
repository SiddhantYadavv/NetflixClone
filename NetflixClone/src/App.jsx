import React from 'react'
import './App.scss'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Body from './components/Body'


function App() {
  
  return (
    <BrowserRouter>
    
    <div className="App">
      <Navbar/>
      <Body/>
      
    </div>
    <Routes>
      <Route path='' element></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
