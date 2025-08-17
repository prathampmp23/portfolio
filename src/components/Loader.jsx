import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Loader = ({ isLoading }) => {
  // Prevent scrolling when loader is active and add blur effect
  useEffect(() => {
    if (isLoading) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
      
      // Add a style tag for the blur effect using CSS
      const style = document.createElement("style");
      style.id = "loader-blur-style";
      style.innerHTML = `
        body::after {
          content: "";
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          z-index: 9998;
          pointer-events: none;
        }
      `;
      document.head.appendChild(style);
    } else {
      // Re-enable scrolling when loader is hidden
      document.body.style.overflow = "auto";
      
      // Remove the blur style
      const style = document.getElementById("loader-blur-style");
      if (style) {
        style.remove();
      }
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
      const style = document.getElementById("loader-blur-style");
      if (style) {
        style.remove();
      }
    };
  }, [isLoading]);

  if (!isLoading) return null;

  // Animation variants for dot loading
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const dotVariants = {
    initial: { y: 0, opacity: 0 },
    animate: {
      y: [0, -15, 0],
      opacity: 1,
      transition: {
        repeat: Infinity,
        duration: 1,
      },
    },
  };
  
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
      <div className="flex flex-col items-center justify-center z-10 pointer-events-auto">
        {/* Glowing box animation */}
        <motion.div
          className="h-20 w-20 mb-8 relative"
          animate={{
            rotate: 360,
            borderRadius: ["20%", "50%", "20%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-teal-400 to-purple-500 rounded-xl shadow-xl"
            animate={{ 
              boxShadow: [
                "0 0 15px 5px rgba(45, 212, 191, 0.3)", 
                "0 0 25px 10px rgba(168, 85, 247, 0.4)", 
                "0 0 15px 5px rgba(45, 212, 191, 0.3)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="h-full w-full bg-gradient-to-r from-teal-400 to-purple-500 rounded-xl opacity-90" />
        </motion.div>

        {/* Bouncing dots animation */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="flex space-x-3 mt-4"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              variants={dotVariants}
              className="w-3 h-3 rounded-full bg-teal-400"
            />
          ))}
        </motion.div>

        {/* Loading text */}
        <motion.p
          className="mt-6 text-white font-medium text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;
