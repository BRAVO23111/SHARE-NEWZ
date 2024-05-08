import React from "react";

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
          <div className="flex justify-center md:justify-start mt-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 pr-10 pl-4 rounded-full transition-opacity duration-300 relative hover:scale-105">
              Let's Talk
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-10 absolute top-1/2 -translate-y-1/2 right-2 text-blue-200 hover:text-blue-100 transition-colors duration-300"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://i.postimg.cc/JzzcBtzv/Picture7.jpg"
            alt="Our Mission"
            className="w-full h-auto md:max-h-80 rounded-md shadow-lg"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-40 gap-28 animate-fade-in transition-opacity duration-100">
        <div>
          <img
            src="https://i.postimg.cc/nhqZBVSK/Picture8.jpg"
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
          <div className="flex justify-center md:justify-start mt-8">
            <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 pr-10 pl-4 rounded-full transition-opacity duration-300 relative hover:scale-105 ">
              Let's Talk
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-10 absolute top-1/2 -translate-y-1/2 right-2 text-blue-200 hover:text-blue-100 transition-colors duration-300"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
