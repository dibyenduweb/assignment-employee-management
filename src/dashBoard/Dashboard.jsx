/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from "../assets/images/logo.png"

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`flex flex-col h-screen ${darkMode ? "dark" : ""}`}>
      {/* Top Navigation */}
      <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center w-44">
          <img src={logo} alt="logo" />
          {/* <span className="text-xl font-bold">Employee-management-system</span> */}
        </div>

        {/* User Account and Dark Mode Toggle */}
        <div className="flex items-center">
          {/* User Account Avatar */}
          <div className="w-8 h-8 rounded-full">
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-6299533-5187865.png?f=webp" alt="" />
          </div>
          
          {/* Dark Mode Toggle */}
          <button >
          Login
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Sidebar and Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`w-64 bg-gray-800 text-white ${
            isMenuOpen ? "block" : "hidden"
          } lg:block`}
        >
          {/* Sidebar content goes here */}
          <div className="p-4">
            <h2 className="text-xl font-bold">Dashboard</h2>
            <ul className="mt-4">
              <li className="py-2 hover:bg-gray-700 cursor-pointer">
                Add a Employee
              </li>
              <li className="py-2 hover:bg-gray-700 cursor-pointer">
                Employees-List
              </li>
              <li className="py-2 hover:bg-gray-700 cursor-pointer">
                Holidays
              </li>
              <li className="py-2 hover:bg-gray-700 cursor-pointer">
                Leaves-Admin
              </li>
              <li className="py-2 hover:bg-gray-700 cursor-pointer">
                Leaves-Employees
              </li>
              <li className="py-2 hover:bg-gray-700 cursor-pointer">
                Leaves settings
              </li>
              <li className="py-2 hover:bg-gray-700 cursor-pointer">
              Attendance-Admin
                  </li>
              <li className="py-2 hover:bg-gray-700 cursor-pointer">
              Attendance-Employees
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-200">
          {/* Main content goes here */}
          <div className="p-4">
            <h2 className="text-xl font-bold">Main Content</h2>
            <p className="mt-4">
              Welcome to the dashboard! This is the main content area.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
