import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-2xl font-bold">
        <Link to="/">LearnVerse</Link> {/* Replace LearnVerse with your chosen name */}
      </div>
      <div className="flex space-x-6">
        <Link to="/" className="text-white hover:text-blue-400">Home</Link>
        <Link to="/courses" className="text-white hover:text-blue-400">Courses</Link>
        <Link to="/about" className="text-white hover:text-blue-400">About</Link>
        <Link to="/contact" className="text-white hover:text-blue-400">Contact</Link>
      </div>
    </nav>
  );
};

export default Header;
