import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Code, Zap } from "lucide-react"; // Icons for visual appeal

const Hero = () => {
  // Animation variants for different elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-100 min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Background shapes for visual interest */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 drop-shadow-lg"
          variants={itemVariants}
        >
          Transform Your Ideas into Reality with{" "}
          <span className="text-purple-700">Expert Engineering</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-700 mb-10 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Specializing in cutting-edge software, web, and mobile app
          development.
          <br />
          <span className="font-semibold text-purple-600">
            Get your engineering project from here.
          </span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          variants={itemVariants}
        >
          <motion.button
            className="flex items-center justify-center px-8 py-4 bg-purple-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300 transform"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Start Your Project Today <ArrowRight size={20} className="ml-2" />
          </motion.button>
          <motion.button
            className="flex items-center justify-center px-8 py-4 bg-white text-purple-600 text-lg font-semibold rounded-full shadow-md border border-purple-300 hover:bg-gray-50 transition-colors duration-300 transform"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Code size={20} className="mr-2" /> Explore Our Services
          </motion.button>
        </motion.div>

        {/* Optional: Small illustrative icons */}
        <motion.div
          className="mt-16 flex justify-center items-center gap-8 text-gray-500"
          variants={itemVariants}
        >
          <Zap size={36} className="text-yellow-500" />
          <Code size={36} className="text-blue-500" />
          <Briefcase size={36} className="text-green-500" />
        </motion.div>
      </motion.div>

      {/* Tailwind Keyframes for blob animation (add to your CSS or a style block) */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.2, 1);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
