// import React from "react";
// import Header from "./Components/Header/Header";
import "./App.css";
import Navbar from "./Components/Header/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Qualification from "./Components/Header/Qalification";
import Aboutme from "./Components/Header/Aboutme";
import Portfolio from "./Components/Header/Portfolio";
import Skills from "./Components/Header/Skills";
import Contactme from "./Components/Header/Contactme";
import Footer from "./Components/Footer/Footer";
import CursorTrail from "./coursor";
function App() {
  return (
    <>
     <CursorTrail/>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Portfolio />} />
        <Route exact path="/Portfolio" element={<Portfolio />} />
        <Route exact path="/Aboutme" element={<Aboutme />} />
        <Route exact path="/Skills" element={<Skills />} />
        <Route exact path="/Qualification" element={<Qualification />} />
        <Route exact path="/Contactme" element={<Contactme />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
