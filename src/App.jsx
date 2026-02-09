import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";


const App = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div>

      <div style={{ display: path === "/" ? "block" : "none" }}>
        <Home />
      </div>

      <div style={{ display: path === "/about" ? "block" : "none" }}>
        <About />
      </div>

      <div style={{ display: path === "/contact" ? "block" : "none" }}>
        <Contact />
      </div>

      <div style={{ display: path === "/projects" ? "block" : "none" }}>
        <Projects />
      </div>
    </div>
   
  );
};

export default App;
