import React from "react";
import Picture1 from "./assets/Picture1.jpg";
import Picture2 from "./assets/Picture2.jpg";
import Picture3 from "./assets/Picture3.jpg";
const Features = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-56 text-center">
        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text bg-gradient-to-r from-purple-700 to-purple-300 text-transparent pb-2 wow fadeInUp">
          Unlock Your Financial{" "}
          <span className="block">Potential with Share Newz Today!</span>
        </h2>
        <p className="mt-5 mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Empower your financial future with Share Newz - personalized mutual
          fund recommendations, expert financial news, and tailored guidance for
          financial success. Start investing wisely today!
        </p>
      </div>
      <div className="grid grid-rows grid-flow-col gap-20 justify-self-center mt-36">
        <div className="text-center ml-48 h-32 mx-auto">
          <img src={Picture1} alt="" />
        </div>
        <div class="text-center justify-between mt-36 mr-24">
          <h1 class="text-4xl font-bold">
            Streamlined Financial Consulting and Recommendations{" "}
          </h1>
          <p class="text-lg italic mt-6">
            Share Newz provides tailored financial consulting and personalized
            mutual fund lists to simplify the investment process for individuals
            with little to no financial knowledge
          </p>
        </div>
      </div>
      <div className="grid grid-rows grid-flow-col gap-36 justify-self-center mt-36">
        <div class="text-center justify-between mt-36 ml-24">
          <h1 class="text-4xl font-bold">
            Unlock Financial Success with Share Newz{" "}
          </h1>
          <p class="text-lg italic mt-6">
            Share Newz empowers users with personalized mutual fund lists,
            insights from financial experts, and updates on financial trends,
            guiding individuals towards successful investments and financial
            independence
          </p>
        </div>
        <div className="text-center mt-5 mr-48 h-32 mx-auto">
          <img src={Picture2} alt="" />
        </div>
      </div>
      <div className="grid grid-rows grid-flow-col gap-20 justify-self-center mt-60">
        <div className="text-center ml-48 h-32 mx-auto">
          <img src={Picture3} alt="" />
        </div>
        <div class="text-center justify-between mt-56 mr-24">
          <h1 class="text-4xl font-bold">
            Empower Your Financial Journey Now{" "}
          </h1>
          <p class="text-lg italic mt-6">
            Share Newz simplifies investments, educates users, and fosters
            financial empowerment through personalized mutual fund lists, expert
            insights, and comprehensive financial resources on one user-friendly
            platform
          </p>
        </div>
      </div>
    </>
  );
};

export default Features;
