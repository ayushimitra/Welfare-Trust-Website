import React from "react";
import Card from "./Card";


const Main = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center ">
      {/* Help Section */}
      <div className="bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row w-full max-w-5xl">
        {/* Left Section */}
        <div className="flex-1 p-6">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            HOW <br /> CAN YOU HELP?
          </h2>
          <div className="w-16 h-1 bg-yellow-500 my-4"></div>
          <p className="text-gray-700 mb-6 text-lg">
            Your donations of rice, cereals, clothes, and other essentials can bring hope to those in need.
            By giving, you help feed hungry families, clothe the less fortunate, and provide relief in difficult times. 
            Every contribution, big or small, makes a difference in improving lives and spreading kindness.
          </p>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
            LEARN MORE
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col items-center">
          <img
            src=''
            alt="Volunteer"
            className="w-48 h-48 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Donation Section */}
      <div className="w-full mt-12">
        <Card />
      </div>
    </div>
  );
};

export default Main;
