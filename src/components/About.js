import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto"
      >
        <h3 className="text-3xl font-bold text-purple-800 mb-6">About Us</h3>
        <p className="text-gray-600 leading-relaxed">
          At Camille Travel Agency, we specialize in crafting personalized travel
          experiences that fit your dreams. Whether it’s a serene island escape
          or a thrilling city adventure, our dedicated team ensures every detail
          is taken care of with passion and precision.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
