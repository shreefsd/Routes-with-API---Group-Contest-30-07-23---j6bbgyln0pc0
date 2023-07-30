import React from 'react'
import '../styles/App.css';
import Navbar from './Navbar';
import {Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Top from './Top';
import Contact from './Contact';

const App = () => {

  return (
    <Router>
    <div id="main">
      <Navbar />
      <div className='container'>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/top-10" element={<Top />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
      </div>
    </div>
    </Router>
  )
}


export default App;
