import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from "./pages/Signin";
import Register from "./pages/Register";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
  );
}

export default App;
