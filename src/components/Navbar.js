import React, { useState, useEffect } from "react";
import { Menu, X, Globe, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Destinations", "Packages", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <Container className="py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Globe className="h-8 w-8 text-primary-600 dark:text-primary-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Camille Travel
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span>{item}</span>
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-600 dark:bg-primary-400"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
            
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-colors ${
                scrolled
                  ? "hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "hover:bg-white/20 dark:hover:bg-gray-800/50"
              }`}
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-primary-400" />
              ) : (
                <Moon className="w-5 h-5 text-primary-600" />
              )}
            </motion.button>
          </div>

          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.95 }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800"
          >
            <Container>
              <div className="py-4 space-y-1">
                {navItems.map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={() => setOpen(false)}
                    whileHover={{ x: 4 }}
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.button
                  onClick={() => setDarkMode(!darkMode)}
                  className="w-full flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  whileTap={{ scale: 0.98 }}
                >
                  {darkMode ? (
                    <>
                      <Sun className="w-5 h-5 mr-2" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="w-5 h-5 mr-2" />
                      Dark Mode
                    </>
                  )}
                </motion.button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};


export default Navbar;
