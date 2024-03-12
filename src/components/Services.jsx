import React from "react";
import Picture4 from "../assets/Picture4.jpg";
import Picture6 from "../assets/Picture6.jpg";

const Services = () => {
  return (
    <div className="px-8 md:px-16 lg:px-48 py-12 mt-28">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-purple-300 text-transparent pb-2 animate-fade-in text-center transition-opacity duration-500">
        <span className="block">Our services</span>
      </h2>
      <p className="mt-6 mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-6 md:px-16 xl:px-48 dark:text-gray-400 text-center animate-fade-in transition-opacity duration-500">
        Empowering your financial journey with expert guidance
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-40 gap-7 animate-fade-in transition-opacity duration-500">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Personalized Financial Consulting
          </h1>
          <p className="text-lg italic mt-6">
            At Share Newz, we offer personalized financial consulting tailored
            to individuals with limited financial knowledge. Our team guides you
            through investment options, budgeting strategies, and financial
            planning to help you achieve your financial goals
          </p>
          <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-opacity duration-300">
            Let's Talk
          </button>
        </div>
        <div>
          <img
            src={Picture4}
            alt="Our Mission"
            className="w-full h-auto md:max-h-80 rounded-md shadow-lg"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-40 gap-28 animate-fade-in transition-opacity duration-100">
        <div>
          <img
            src={Picture6}
            alt="Our Vision"
            className="w-full h-auto md:max-h-80 rounded-md shadow-lg"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Customized Mutual Fund Portfolios
          </h1>
          <p className="text-lg italic mt-6">
            Share Newz creates customized mutual fund portfolios based on your
            risk tolerance and investment objectives. We carefully curate a list
            of mutual funds that align with your financial goals, ensuring a
            diversified and optimal investment strategy for you
          </p>
          <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-opacity duration-300">
            Let's Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
