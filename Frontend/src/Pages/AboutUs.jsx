import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 md:px-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-amber-700">About Us</h1>
        <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
          Sai Baba Ashray Welfare Trust is committed to serving humanity with kindness, compassion, and unwavering dedication.
        </p>
      </div>

      {/* Leadership Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Secretary - Sajal Kumar Mitra */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src="/assets/sajal-mitra.jpg" // Replace with actual image
            alt="Sajal Kumar Mitra"
            className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Sajal Kumar Mitra</h3>
          <p className="text-gray-500 text-sm">Secretary</p>
          <p className="text-gray-700 mt-2">
            With years of service in community welfare, Sajal Kumar Mitra leads initiatives focusing on education, healthcare, and relief support.
          </p>
        </div>

        {/* President - Padma Mitra */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src="/assets/padma-mitra.jpg" // Replace with actual image
            alt="Padma Mitra"
            className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Padma Mitra</h3>
          <p className="text-gray-500 text-sm">President</p>
          <p className="text-gray-700 mt-2">
            A dedicated humanitarian, Padma Mitra envisions a world where no one is deprived of basic needs and strives to uplift the underprivileged.
          </p>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="bg-white p-8 rounded-lg shadow-md mt-12">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Our Mission</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mt-2">
          Our mission is to provide food, shelter, healthcare, and education to the underprivileged. With your support, we can create a world filled with hope and opportunity.
        </p>
      </div>

      {/* Get In Touch Form */}
      <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Get in Touch</h2>
        <p className="text-gray-600 text-center mb-6">We’d love to hear from you! Feel free to reach out with any questions or contributions.</p>

        <form className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-amber-700"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-amber-700"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-amber-700 mt-4 h-32"
            required
          ></textarea>
          <button className="mt-4 w-full bg-amber-700 text-white py-3 rounded-md font-semibold hover:bg-amber-800 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default AboutUs;
