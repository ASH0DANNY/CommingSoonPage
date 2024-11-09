import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import AaboutPage from "./components/Pages/AaboutPage";
import ContactUsPage from "./components/Pages/ContactUsPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AaboutPage />} />
          <Route exact path="/contact" element={<ContactUsPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
