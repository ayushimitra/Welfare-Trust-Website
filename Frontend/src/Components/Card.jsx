import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHandHoldingHeart, FaPrayingHands, FaUtensils, FaGopuram, FaGift } from "react-icons/fa";

const donationItems = [
  { id: 1, title: "Purnima Puja Offering", icon: <FaPrayingHands />, desc: "Contribute to the sacred Purnima Puja and receive divine blessings.", bg: "bg-gradient-to-r from-purple-600 to-indigo-600" },
  { id: 2, title: "Mahaprasad Offering", icon: <FaUtensils />, desc: "Sponsor Mahaprasad and help feed thousands of devotees.", bg: "bg-gradient-to-r from-red-600 to-orange-600" },
  { id: 3, title: "Temple Maintenance", icon: <FaGopuram />, desc: "Support temple upkeep and ensure it remains a place of worship.", bg: "bg-gradient-to-r from-blue-600 to-teal-600" },
  { id: 4, title: "Daily Annadan Seva", icon: <FaHandHoldingHeart />, desc: "Donate meals and provide food to the underprivileged.", bg: "bg-gradient-to-r from-green-600 to-lime-600" },
  { id: 5, title: "Festival Sponsorship", icon: <FaGift />, desc: "Help organize grand temple festivals and spiritual events.", bg: "bg-gradient-to-r from-yellow-600 to-amber-600" }
];

const DonationSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Slide changes every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % donationItems.length);
      setFlipping(false);
    }, 400);
  };

  const prevSlide = () => {
    setFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + donationItems.length) % donationItems.length);
      setFlipping(false);
    }, 400);
  };

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-100 py-12 px-4">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Temple Donation Offerings</h2>

      {/* Slideshow Container */}
      <div className="relative w-full max-w-md h-80">
        <AnimatePresence mode="wait">
          <motion.div
            key={donationItems[currentIndex].id}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className={`absolute w-full h-full flex flex-col items-center justify-center text-white p-6 rounded-xl shadow-lg ${donationItems[currentIndex].bg}`}
          >
            <div className="text-5xl mb-3">{donationItems[currentIndex].icon}</div>
            <h3 className="text-2xl font-bold mb-2">{donationItems[currentIndex].title}</h3>
            <p className="text-md text-center opacity-90">{donationItems[currentIndex].desc}</p>
            <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition">
              Donate Now
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex gap-4">
        <button onClick={prevSlide} className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition">
          ← Previous
        </button>
        <button onClick={nextSlide} className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition">
          Next →
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="mt-4 flex gap-2">
        {donationItems.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition ${index === currentIndex ? "bg-black" : "bg-gray-400"}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default DonationSlideshow;
