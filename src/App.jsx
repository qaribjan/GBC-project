import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Header from './Components/Header';
import Home from './Components/Header/Homeslider';
import Login from './Components/Header/Login';
function App() {
  return (
    <>
     <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    <div>
    <Header/>
    </div>
    <div>  
    <Home/>
    </div>
    </>
  )
}

export default App;

