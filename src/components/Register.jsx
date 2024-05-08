import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';

const Register = () => {
  return (
    <div className="max-w-lg mx-auto bg-gradient-to-r from-purple-400 to-purple-600 shadow-lg rounded-lg p-6 mb-6 text-center mt-20">
      <h2 className="text-2xl font-bold mb-6 text-white">Register</h2>
      <form className="space-y-4">
        <div className="flex items-center  rounded">
          <span className="p-3 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>

          </span>
          <input
            className="flex-1 py-2 px-4 focus:outline-none"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="flex items-center rounded">
          <span className="p-3 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

          </span>
          <input
            className="flex-1 py-2 px-4 focus:outline-none"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline ml-44" type="button">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
