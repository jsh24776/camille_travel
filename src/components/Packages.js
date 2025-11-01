import React from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { Button } from "./Button";
import { Calendar, Plane, Users, Star, Check, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Luxury Escape",
    price: "$4,999",
    duration: "10 Days",
    includes: [
      "5-Star Hotel Accommodations",
      "Private Luxury Transfers",
      "Gourmet Dining Experiences",
      "Exclusive Spa Treatments",
      "Personal Concierge Service",
      "VIP Airport Lounge Access"
    ],
    popular: true,
    icon: "✨"
  },
  {
    name: "Adventure Seeker",
    price: "$3,499",
    duration: "14 Days",
    includes: [
      "Premium Hotel Stays",
      "Guided Adventure Tours",
      "All Equipment Included",
      "Local Experiences",
      "Professional Photography",
      "Travel Insurance"
    ],
    popular: false,
    icon: "🏃‍♂️"
  },
  {
    name: "Cultural Immersion",
    price: "$2,999",
    duration: "8 Days",
    includes: [
      "Boutique Hotels",
      "Local Guide & Transport",
      "Authentic Workshops",
      "Traditional Meals",
      "Museum & Temple Passes",
      "Language Introduction"
    ],
    popular: false,
    icon: "🎨"
  }
];

const Packages = () => {
  return (
    <section id="packages" className="py-24 bg-gray-50 dark:bg-gray-800">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Travel Packages
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose from our carefully crafted packages designed to provide unforgettable experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className={`
                bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-soft-xl dark:shadow-none 
                border border-gray-100 dark:border-gray-700 
                ${pkg.popular ? 'ring-2 ring-primary-500 ring-offset-4 dark:ring-offset-gray-800' : ''}
              `}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Package Header */}
                <div className="text-center mb-8">
                  <span className="text-4xl mb-4 block">{pkg.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-primary-600 mb-1">
                    {pkg.price}
                  </div>
                  <span className="text-gray-500 dark:text-gray-400">per person</span>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {pkg.includes.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  variant={pkg.popular ? "primary" : "secondary"}
                  className="w-full group"
                >
                  <span>Book Package</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300">
            All packages include 24/7 support, travel insurance, and flexible booking options
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default Packages;
