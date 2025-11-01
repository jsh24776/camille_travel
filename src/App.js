import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Destinations from "./components/Destinations";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans bg-gradient-to-b from-purple-50 to-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Destinations />
      <Packages />
      <Testimonials />
      <Contact />
      <footer className="text-center py-6 border-t mt-12 text-gray-500">
        © {new Date().getFullYear()} Camille Travel Agency. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
