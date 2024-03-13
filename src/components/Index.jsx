import React from "react";
import Features from "../components/Features";

const IndexPage = () => {
  return (
    <>
      <div className="text-center mt-36 w-screen">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-7xl dark:text-white">
          Empower Your Finance with <span className="block">Share Newz</span>
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Empower your financial future with Share Newz - personalized mutual
          fund recommendations, expert financial news, and tailored guidance for
          financial success. Start investing wisely today!
        </p>
        <a
          href="#"focus:ring-4
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  focus:ring-blue-300 dark:focus:ring-blue-900 transition duration-300 transform hover:scale-105"
        >
          Book for a Free Consultancy
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 ml-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
        </a>
      </div>
      <Features />
    </>
  );
};

export default IndexPage;
