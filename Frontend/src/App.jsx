import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Mission from "./Pages/Mission";
import Contact from "./Pages/Contact";
import Donations from "./Pages/Donations";
import Signin from "./Views/Signin";
import AboutUs from "./Pages/AboutUs";
import Navbar from "./Components/Navbar"; // Ensure you have a Navbar
import Login from "./Views/login";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Keeps Navbar on every page */}
      <div className="pt-16"> {/* Ensures content isn’t hidden behind a fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
