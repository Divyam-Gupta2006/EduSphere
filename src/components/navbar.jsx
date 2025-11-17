import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-sm w-full fixed top-0 left-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">EduSphere</h1>

      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li className="cursor-pointer hover:text-blue-600">Students</li>
        <li className="cursor-pointer hover:text-blue-600">Colleges</li>
        <li className="cursor-pointer hover:text-blue-600">Industry</li>
        <li className="cursor-pointer hover:text-blue-600">Resources</li>
      </ul>

      <div className="flex gap-4">
        <Link to="/studentlogin">
          <button className="px-4 py-2 border-blue-600 border rounded-md text-blue-600 hover:bg-blue-50">
            Login
          </button>
        </Link >
        <Link to="/studentsignup">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Register
        </button>
        </Link>
      </div>
    </nav>
  );
}

