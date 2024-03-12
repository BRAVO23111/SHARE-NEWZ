import React from "react";

const PricingPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Choose Your Plan</h1>
      <div className="flex justify-center">
        {/* Standard Plan */}
        <div className="max-w-md mx-4 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Standard</h2>
            <p className="text-gray-700 text-lg mb-6">Great for Students and Indivual people</p>
            <p className="text-gray-700 text-lg mb-6">Price: ₹499 / month</p>
            <ul className="text-gray-700 text-lg mb-6">
              <li>Feature 1</li>
              <li>Feature 2</li>
              {/* Less features compared to premium plan */}
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              Choose Plan
            </button>
          </div>
        </div>
        {/* Premium Plan */}
        <div className="max-w-lg mx-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-3xl font-semibold text-white mb-4">Premium</h2>
            <p className="text-white text-lg mb-6">All-inclusive plan for power users.</p>
            <p className="text-white text-lg mb-6">Price: ₹999 / month</p>
            <ul className="text-white text-lg mb-6">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              {/* Add more features */}
            </ul>
            <button className="bg-white text-purple-500 hover:bg-purple-600 font-bold py-2 px-4 rounded-full">
              Choose Plan
            </button>
          </div>
        </div>
        {/* Basic Plan */}
        <div className="max-w-md mx-4 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Basic</h2>
            <p className="text-gray-700 text-lg mb-6">Starter plan with limited features.</p>
            <p className="text-gray-700 text-lg mb-6">Price: Free</p>
            <ul className="text-gray-700 text-lg mb-6">
              <li>Feature 1</li>
              {/* Basic features */}
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
