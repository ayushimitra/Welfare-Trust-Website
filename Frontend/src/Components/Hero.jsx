import React from "react";
import header from "../assets/header.jpg";

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center mt-[72px] px-4">
      {/* Container for Centering */}
      <div className="relative w-full max-w-6xl h-[75vh] flex items-center justify-center overflow-hidden rounded-3xl shadow-lg">
        {/* Hero Image */}
        <img
          src={header}
          alt="hero"
          className="w-full h-full object-cover rounded-3xl"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0  bg-opacity-50 rounded-3xl"></div>

        {/* Text Content */}
        <div className="absolute text-center text-white px-6 md:px-16">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            Empowering Change, One Step at a Time
          </h1>
          <p className="text-md md:text-lg max-w-2xl mx-auto">
            Join us in transforming lives through education, healthcare, and
            community support. Together, we can create a brighter future.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 bg-amber-700 text-white font-semibold rounded-md hover:bg-amber-800 transition">
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
