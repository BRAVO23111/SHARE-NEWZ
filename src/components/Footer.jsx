import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-56">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="list-none p-0 flex space-x-4">
            <li><Link to="/" className="hover:text-gray-500">Home</Link></li>
            <li><Link to="/services" className="hover:text-gray-500">Services</Link></li>
            <li><Link to="/articles" className="hover:text-gray-500">Articles</Link></li>
            <li><Link to="/privacy" className="hover:text-gray-500">Privacy</Link></li>
            <li><Link to="/contact" className="hover:text-gray-500">Contact</Link></li>
          </ul>
        </div>
        <div className="flex items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
          <p className="text-gray-400 text-sm ml-4">Share Newz Technologies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
