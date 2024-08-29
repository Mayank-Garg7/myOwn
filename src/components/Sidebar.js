// Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="p-4 bg-gray-100 border-r border-gray-300">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      <ul className="space-y-2">
        <li><a href="#section1" className="text-blue-500 hover:underline">Section 1</a></li>
        <li><a href="#section2" className="text-blue-500 hover:underline">Section 2</a></li>
        <li><a href="#section3" className="text-blue-500 hover:underline">Section 3</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
