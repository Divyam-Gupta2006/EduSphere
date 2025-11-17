import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage.jsx";
import StudentSignUpPage from "./pages/StudentSignupPage.jsx";
import StudentLoginPage from "./pages/StudentLoginPage.jsx";

// add more pages as needed

export default function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/studentsignup" element={<StudentSignUpPage />} />
        <Route path="/studentlogin" element={<StudentLoginPage />} />
        
      </Routes>
    </div>
  );
}
