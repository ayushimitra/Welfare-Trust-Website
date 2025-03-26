import React from "react";
 // Replace with actual image

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 md:px-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-amber-700">About Us</h1>
        <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
          **Sai Baba Ashray Welfare Trust** is dedicated to humanitarian efforts, providing support to the underprivileged through food distribution, education, medical aid, and community services.
        </p>
      </div>

      {/* Leadership Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        

        {/* President - Padma Mitra */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <img
            src=''
            alt="Padma Mitra"
            className="w-40 h-40 rounded-full mb-4 border-4 border-yellow-500 object-cover"
          />
          <h2 className="text-2xl font-bold text-gray-900">Padma Mitra</h2>
          <p className="text-amber-700 font-semibold mb-2">President</p>
          <p className="text-gray-600 text-sm">
            As the President of the Trust, Padma Mitra leads with a vision of kindness and service. Her unwavering support and leadership empower countless individuals, creating lasting positive change in the community.
          </p>
        </div>
        {/* Secretary - Sajal Kumar Mitra */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <img
            src=''
            alt="Sajal Kumar Mitra"
            className="w-40 h-40 rounded-full mb-4 border-4 border-yellow-500 object-cover"
          />
          <h2 className="text-2xl font-bold text-gray-900">Sajal Kumar Mitra</h2>
          <p className="text-amber-700 font-semibold mb-2">Secretary</p>
          <p className="text-gray-600 text-sm">
            A compassionate leader committed to social welfare, Sajal Kumar Mitra plays a key role in driving our mission forward. His dedication ensures that the trust reaches those in need with essential aid and resources.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

