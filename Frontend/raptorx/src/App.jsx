import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./Components/Navbar";
import { Signup } from "./Components/Authentication/Signup";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  return (
    <div className="layout-container">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
