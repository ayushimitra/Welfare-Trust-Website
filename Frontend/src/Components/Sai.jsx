import React from 'react'
import mandir from '../assets/mandir.jpg'

const Sai = () => {
  return (
    <div className="relative bg-gray-100 py-16 px-6 md:px-12 text-center mt-20">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-yellow-100 opacity-40 rounded-lg"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-amber-700 mb-4">
          Sai Baba Mandir - A Place of Peace & Devotion
        </h2>
        <div className="w-16 h-1 bg-amber-700 mx-auto mb-6"></div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={mandir}
            alt="Sai Baba"
            className="w-full max-w-3xl rounded-lg shadow-lg border-4 border-yellow-500"
          />
        </div>

        {/* Description */}
        <p className="text-gray-700 text-lg md:text-xl mt-6 max-w-3xl mx-auto">
          The **Sai Baba Mandir** is a sanctuary of faith, love, and devotion.
          A place where prayers are answered, and peace is found. Join us in
          spreading kindness through seva (service) and heartfelt prayers.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <button className="px-6 py-3 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-800 transition">
            Donate for Temple
          </button>
          <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition">
            Volunteer Now
          </button>
        </div>
      </div>
    </div>
  );
};



export default Sai
