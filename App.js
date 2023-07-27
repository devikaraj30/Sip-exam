import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Menu from './components/Menu';
import Contact from "./components/Contact";
import About from './components/About';
import Navbar from './components/Navbar';
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
         <>
         

         <BrowserRouter>
         <Navbar/>
         <Routes>

           <Route path="/" element ={<Home />} />
           <Route path="/about" element ={<About />} />
           <Route path="/menu" element ={<Menu />} />
           <Route path="/contact" element ={<Contact />} />
           <Route path="/login" element ={<Login/>} />
           <Route path="/signup" element ={<Signup />} />
          </Routes>
          </BrowserRouter>
         </>
  );
}

export default App;