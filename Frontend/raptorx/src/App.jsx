import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./Components/Navbar";
import { Signup } from "./Components/Authentication/Signup";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import FilterPage from "./Components/Filter/FilterPage";
import ItemPage from "./Components/Filter/ItemPage";

const App = () => {
  return (
    <div className="layout-container">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/solution" element={<FilterPage />} />
          <Route path="/item/:id" element={<ItemPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
