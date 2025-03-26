import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Mission = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Hero Section */}
      <div 
  className="relative w-full h-[450px] bg-cover bg-center flex items-center justify-center text-white"
  style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?charity,help')" }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>
  
  <div className="relative z-10 text-center px-6 md:px-12">
    <h1 className="text-5xl font-extrabold tracking-wide mb-4 animate-fade-in">
      Our Mission
    </h1>
    <p className="text-lg md:text-xl font-light max-w-2xl mx-auto animate-slide-up">
      Transforming lives through compassion, empowerment, and unwavering dedication to service.
    </p>
  </div>
</div>

      {/* Upcoming Missions */}
      <motion.div className="container mx-auto px-6 mt-10"
        initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Upcoming Missions</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Opening of a School */}
          <motion.div className="bg-white shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src="https://source.unsplash.com/400x300/?school,education" alt="Opening a School" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Opening a School</h3>
              <p className="text-gray-600">Providing free education to underprivileged children.</p>
              <Link to="/participate" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
                Participate Now
              </Link>
            </div>
          </motion.div>

          {/* Blood Donation Camp */}
          <motion.div className="bg-white shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src="https://source.unsplash.com/400x300/?blood-donation" alt="Blood Donation Camp" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Blood Donation Camp</h3>
              <p className="text-gray-600">Organized every 3 months to save lives.</p>
              <Link to="/participate" className="mt-4 inline-block bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition">
                Participate Now
              </Link>
            </div>
          </motion.div>

          {/* Small Missions */}
          <motion.div className="bg-white shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src="https://source.unsplash.com/400x300/?charity,community" alt="Small Missions" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Other Small Missions</h3>
              <p className="text-gray-600">Numerous small initiatives to support our community.</p>
              <Link to="/participate" className="mt-4 inline-block bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition">
                Participate Now
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Successful Missions */}
      <motion.div className="container mx-auto px-6 mt-16"
        initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Successful Missions</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Purnima Puja */}
          <motion.div className="bg-white shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src="https://source.unsplash.com/400x300/?temple,prayer" alt="Purnima Puja" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Monthly Purnima Puja</h3>
              <p className="text-gray-600">A spiritual gathering for peace and welfare.</p>
            </div>
          </motion.div>

          {/* Daily Meal */}
          <motion.div className="bg-white shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src="https://source.unsplash.com/400x300/?food,community" alt="Daily Meal" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Daily Meal at ₹20</h3>
              <p className="text-gray-600">Providing affordable meals for everyone.</p>
            </div>
          </motion.div>

          {/* Cloth Distribution */}
          <motion.div className="bg-white shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src="https://source.unsplash.com/400x300/?clothes,donation" alt="Cloth Distribution" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Cloth Distribution</h3>
              <p className="text-gray-600">Helping those in need with free clothing.</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div className="mt-16 text-center"
        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Be a part of our mission!</h3>
        <Link to="/participate" className="bg-amber-700 text-white py-3 px-6 rounded-lg hover:bg-amber-800 transition">
          Participate Now
        </Link>
      </motion.div>
    </div>
  );
};

export default Mission;
