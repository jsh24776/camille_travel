import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { Card, CardContent } from "./Card";
import { Button } from "./Button";

const destinations = [
  {
    name: "Santorini, Greece",
    img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800",
    price: "$2,499",
    duration: "7 days",
    rating: 4.9,
    description: "Experience stunning sunsets and white-washed architecture"
  },
  {
    name: "Bali, Indonesia",
    img: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800",
    price: "$1,899",
    duration: "10 days",
    rating: 4.8,
    description: "Tropical paradise with rich culture and beautiful beaches"
  },
  {
    name: "Kyoto, Japan",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
    price: "$2,799",
    duration: "8 days",
    rating: 4.9,
    description: "Ancient temples and traditional gardens await"
  }
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-24 bg-white dark:bg-gray-900">
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
              Popular Destinations
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our most sought-after destinations, carefully curated for unforgettable experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <Card key={dest.name} className="group">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-t-2xl h-72">
                <motion.img
                  src={dest.img}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full px-4 py-1 shadow-lg">
                  <span className="font-bold text-primary-600">{dest.price}</span>
                </div>
              </div>

              <CardContent>
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {dest.name}
                    </h3>
                    <MapPin className="h-5 w-5 text-primary-600 flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {dest.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary-600" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{dest.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-primary-600">★ {dest.rating}</span>
                  </div>
                </div>

                <Button
                  variant="primary"
                  className="w-full group/btn"
                >
                  <span>View Details</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Button
            variant="secondary"
            size="lg"
            className="group"
          >
            <span>Explore All Destinations</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default Destinations;
