import React from "react";
import Picture4 from "./assets/Picture4.jpg";
import Picture6 from "./assets/Picture6.jpg";

const AboutUs = () => {
  return (
    <div className="px-8 md:px-16 lg:px-48 py-12 mt-28">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-purple-300 text-transparent pb-2 wow fadeInUp text-center">
        <span className="block">About us</span>
      </h2>
      <p className="mt-6 mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-6 md:px-16 xl:px-48 dark:text-gray-400 text-center">
        Share Newz is a leading financial consulting firm dedicated to
        empowering individuals with limited financial literacy. We create
        personalized mutual fund lists to help clients make informed investment
        decisions and provide insights from top financial advisors.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-40 gap-7">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h1>
          <p className="text-lg italic mt-6">
            Our mission is to democratize access to financial knowledge and
            resources, guiding individuals towards achieving their financial
            goals and securing their future
          </p>
        </div>
        <div>
          <img
            src={Picture4}
            alt="Our Mission"
            className="w-full h-auto md:max-h-80 rounded-md shadow-lg"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-40 gap-28">
        <div>
          <img
            src={Picture6}
            alt="Our Vision"
            className="w-full h-auto md:max-h-80 rounded-md shadow-lg"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h1>
          <p className="text-lg italic mt-6">
            We envision a world where everyone, regardless of their financial
            background, has the opportunity to build wealth and financial
            stability through education, guidance, and smart investment choices
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
