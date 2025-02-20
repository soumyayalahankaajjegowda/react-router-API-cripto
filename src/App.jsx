import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Currencies from "./pages/currencies";
import Main from "./pages/main";
import Price from "./pages/price";
import Nav from './components/Nav.jsx'
import './App.css'

export default function App() {
  
  return (
       <div className="App">
        <Nav />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/currencies" element={<Currencies/>}/>
        <Route path="/price/:symbol" element={<Price/>}/>
      </Routes>
    </div> 
  )
}


