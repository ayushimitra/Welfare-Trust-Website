import React from "react";
import { motion } from "framer-motion";
import header from "../assets/header.jpg";

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center mt-[60px] px-4">
      {/* Hero Container */}
      <div className="relative w-full max-w-6xl h-[80vh] flex items-center justify-center overflow-hidden rounded-3xl shadow-lg">
        
        {/* Hero Image */}
        <img
          src={header}
          alt="hero"
          className="w-full h-full object-cover rounded-3xl"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 rounded-3xl"></div>

        {/* Text Content with Animation */}
        <motion.div 
          className="absolute text-center text-white px-6 md:px-16"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            Be the Helping Hands  
            <br className="hidden md:block" />  
            That Change Lives  
          </h1>
          <p className="text-md md:text-lg max-w-2xl mx-auto opacity-90">
            Join us in transforming lives through education, healthcare, and community support.  
            Together, we can create a brighter future.
          </p>
        </motion.div>
      </div>
    </div>
  );
}; 

export default Hero;
