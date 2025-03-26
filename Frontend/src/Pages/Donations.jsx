import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaTshirt, FaAppleAlt, FaBook, FaHeartbeat, FaHome, FaGopuram, FaHandHoldingHeart, FaPray } from "react-icons/fa";

const donations = [
  { id: 1, name: "John Doe", item: "Clothes", amount: "20", img: "https://source.unsplash.com/100x100/?person" },
  { id: 2, name: "Emma Watson", item: "Food Supplies", amount: "50", img: "https://source.unsplash.com/100x100/?woman" },
  { id: 3, name: "Michael Smith", item: "Books", amount: "30", img: "https://source.unsplash.com/100x100/?man" },
  { id: 4, name: "Sophia Lee", item: "Financial Support", amount: "₹5000", img: "https://source.unsplash.com/100x100/?business" }
];

const Donation = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      
      {/* Hero Section */}
      <div 
        className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?charity,giving')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-extrabold tracking-wide mb-4">Make a Difference Today</h1>
          <p className="text-lg max-w-2xl mx-auto">Your small donation can bring a big change in someone's life.</p>
        </div>
      </div>

      {/* Temple Donation Section */}
      <motion.div 
        className="container mx-auto px-6 mt-16"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Temple Donations</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <FaGopuram className="text-indigo-600 text-4xl mb-3" />
            <h3 className="text-xl font-bold mb-2">Temple Maintenance</h3>
            <p className="text-gray-600">Support the upkeep and renovation of the temple premises.</p>
          </motion.div>

          <motion.div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <FaHandHoldingHeart className="text-red-600 text-4xl mb-3" />
            <h3 className="text-xl font-bold mb-2">Annadanam (Food Offering)</h3>
            <p className="text-gray-600">Donate for free meals distributed to devotees and the needy.</p>
          </motion.div>

          <motion.div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <FaPray className="text-green-600 text-4xl mb-3" />
            <h3 className="text-xl font-bold mb-2">Special Pooja Sponsorship</h3>
            <p className="text-gray-600">Contribute towards religious rituals and special pujas.</p>
          </motion.div>
        </div>

        <div className="text-center mt-6">
          <button className="px-6 py-3 bg-indigo-700 text-white font-semibold rounded-md hover:bg-indigo-800 transition">
            Donate to the Temple
          </button>
        </div>
      </motion.div>

            {/* Items That Can Be Donated */}
            <motion.div 
        className="container mx-auto px-6 mt-10"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">What Can You Donate?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <FaTshirt className="text-blue-600 text-4xl mb-3" />
            <h3 className="text-xl font-bold mb-2">Clothes</h3>
            <p className="text-gray-600">Donate gently used clothes to help those in need.</p>
          </motion.div>

          <motion.div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <FaAppleAlt className="text-green-600 text-4xl mb-3" />
            <h3 className="text-xl font-bold mb-2">Food Supplies</h3>
            <p className="text-gray-600">Provide non-perishable food to feed hungry families.</p>
          </motion.div>

          <motion.div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <FaBook className="text-yellow-600 text-4xl mb-3" />
            <h3 className="text-xl font-bold mb-2">Books</h3>
            <p className="text-gray-600">Help underprivileged students with educational books.</p>
          </motion.div>

          <motion.div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <FaHeartbeat className="text-red-600 text-4xl mb-3" />
            <h3 className="text-xl font-bold mb-2">Medical Support</h3>
            <p className="text-gray-600">Donate medicines, medical kits, and healthcare support.</p>
          </motion.div>

          <motion.div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <FaHome className="text-purple-600 text-4xl mb-3" />
            <h3 className="text-xl font-bold mb-2">Shelter Essentials</h3>
            <p className="text-gray-600">Provide blankets, tents, and emergency shelter items.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Recent Donations */}
 

      {/* Recent Donations */}
      <motion.div 
        className="container mx-auto px-6 mt-16"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Recent Donations</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {donations.map((donor) => (
            <motion.div key={donor.id} 
              className="bg-white shadow-lg rounded-lg p-6 flex items-center gap-4"
              whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <img src={donor.img} alt={donor.name} className="w-16 h-16 rounded-full border-2 border-gray-300" />
              <div>
                <h3 className="text-lg font-bold">{donor.name}</h3>
                <p className="text-gray-600">{donor.item} - {donor.amount}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>


      {/* Thank You Section */}
      <motion.div 
        className="mt-16 text-center py-12 bg-blue-600 text-white"
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold mb-4">Thank You for Your Support! 💙</h3>
        <p className="text-lg max-w-2xl mx-auto">
          Your kindness helps us bring hope and change lives. Every contribution, big or small, makes a difference!
        </p>
      </motion.div>
    </div>
  );
};

export default Donation;
