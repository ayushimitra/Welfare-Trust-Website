import React from "react";

function DonatorCard() {
  const donors = [
    {
      name: "Chris Binva",
      role: "Nikan Manager, Sydney",
      donated: 1052,
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Jenny Rose",
      role: "Nikan Manager, Sydney",
      donated: 252,
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Benny Doe",
      role: "Nikan Manager, Sydney",
      donated: 1052,
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
      {/* Title */}
      <h2 className="text-3xl font-bold text-amber-700 mb-2">
        Latest <span className="text-gray-900">Donators</span>
      </h2>
      <p className="text-gray-500 mb-8">
        Our charity helps those people who have no hope.
      </p>

      {/* Donors Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {donors.map((donor, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center w-72 hover:shadow-lg transition"
          >
            <img
              src={donor.image}
              alt={donor.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-yellow-500"
            />
            <h3 className="text-xl font-semibold">{donor.name}</h3>
            <p className="text-gray-500 text-sm">{donor.role}</p>
            <p className="mt-2 text-gray-700">
              <strong>Donated:</strong>{" "}
              <span className="text-yellow-500 font-bold">${donor.donated}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Become a Donor Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-12 text-center w-96">
        <h3 className="text-xl font-semibold text-gray-900">
          Become a <span className="text-amber-700 font-bold">Donator</span>
        </h3>
        <p className="text-gray-500 text-sm my-3">
          Join hands with us and be a part of something meaningful. Every donation counts!
        </p>
        <button className="bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-800 transition">
          JOIN NOW!
        </button>
      </div>
    </div>
  );
}

export default DonatorCard;
