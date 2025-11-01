import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto"
      >
        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">About Us</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        At Millie Travel & Beyond Agency, we specialize in crafting personalized travel experiences that fit your dreams. 
        Whether it’s a serene island escape or a thrilling city adventure, our dedicated team ensures every detail is taken care of with passion and precision.
        Plus, with our AI Travel Assistant, you can instantly get trip suggestions, destination information,
         and travel tips — making your planning faster, easier, and smarter.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
