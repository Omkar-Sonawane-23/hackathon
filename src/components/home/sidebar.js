import React from 'react';
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from 'react-icons/fa'; // Importing icons from react-icons

const Sidebar = () => {
  return (
    <div className="h-screen w-64 text-gray-800 bg-white">
      <div className="flex items-center justify-center h-16 border-b border-gray-700">
        <h1 className="text-2xl font-bold">PCCOE</h1>
      </div>
      <ul className="mt-10">
        <li className="flex items-center p-4 hover:bg-gray-200 cursor-pointer">
          <FaHome className="mr-3" />
          <a href="#home">Home</a>
        </li>
        <li className="flex items-center p-4 hover:bg-gray-200 cursor-pointer">
          <FaInfoCircle className="mr-3" />
          <a href="#about">Calender</a>
        </li>
        <li className="flex items-center p-4 hover:bg-gray-200 cursor-pointer">
          <FaServicestack className="mr-3" />
          <a href="#services">Create event</a>
        </li>
        <li className="flex items-center p-4 hover:bg-gray-200 cursor-pointer">
          <FaEnvelope className="mr-3" />
          <a href="#contact">Dashboard</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
