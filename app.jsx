// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar.jsx"; // CRITICAL: Uses default export
import Hero from "./components/Hero.jsx";
import Categories from "./components/Categories.jsx";
import TrustedCompanies from "./components/TrustedCompanies.jsx";
import { COURSE_TABS_DATA, TRUSTED_COMPANIES_DATA } from "./data.js"; // Uses .js extension

export default function App() {
  return (
    <div className="udemy-clone-landing">
      <Navbar />
      <Hero />
      <Categories data={COURSE_TABS_DATA} /> 
      <TrustedCompanies companies={TRUSTED_COMPANIES_DATA} />
    </div>
  );
}