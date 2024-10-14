import React from 'react';
import './App.css'; 
import NavBar from './Componet/Navbar';
import Home from './Componet/Home';
import About from './Componet/AboutUs';
import Services from './Componet/Services';
import Contact from './Componet/Contact';
import Customers from './Componet/Customers';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Componet/Login';

function App() {
  return (
    
    <>
       <div className="App"> 
        <Login />
        {/* <BrowserRouter> */}
        {/* <NavBar  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/login" element={<Login />} />

        </Routes>
        </BrowserRouter>   */}
      </div>
    </>
  );
} 

export default App;
