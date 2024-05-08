import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto bg-gradient-to-r from-purple-400 to-purple-600 shadow-lg rounded-xl p-6 mb-6 text-center flex flex-col justify-center items-center mt-44">
      <h2 className="text-3xl font-bold mb-4 text-white">Contact Us</h2>
      <div className="mb-6">
        <p className="text-gray-200 mb-2">Email: <a href="mailto:sharenewz123@gmail.com" className="text-purple-200 hover:underline">sharenewz123@gmail.com</a></p>
        <p className="text-gray-200 mb-2">Contact Number: <a href="tel:7865891721" className="text-purple-200 hover:underline">786-589-1721</a></p>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">Availability:</h3>
        <p className="text-gray-200 mb-2">Monday to Friday: 9:00 AM - 5:00 PM</p>
        <p className="text-gray-200 mb-2">Saturday: 10:00 AM - 2:00 PM</p>
        <p className="text-gray-200 mb-2">Sunday: Closed</p>
      </div>
      <Link to="/contact" className="text-purple-200 hover:underline">Need immediate assistance? Contact us now.</Link>
    </div>
  );
};

export default ContactUs;
