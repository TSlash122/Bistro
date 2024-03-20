import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import ContactForm from "./pages/ContactForm";
import AdminApp from "./admin/AdminApp";
import AdminSignIn from "./pages/AdminSignIn";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/admin" element={<AdminApp/>} />
        <Route path="/adminlogin" element={<AdminSignIn/>} />
      

      </Routes>
    </Router>
  );
}

export default App;
