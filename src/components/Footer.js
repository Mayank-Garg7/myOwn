// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} LearnVerse. All rights reserved.</p>
        <div className="mt-2">
          <a href="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</a> | 
          <a href="/terms-of-service" className="text-blue-400 hover:underline ml-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

