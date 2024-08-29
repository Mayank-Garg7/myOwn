// Layout.js
import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Header from './Header'; // Import the Header component

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> 
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
