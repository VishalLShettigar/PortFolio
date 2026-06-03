import React from 'react';
import { motion } from 'framer-motion';
import { Heart, X } from 'lucide-react';

const ThankYouScreen = ({ onCancel }) => {
  const handleCloseTab = () => {
    // Note: Modern browsers may block window.close() if the tab wasn't opened by a script.
    // We attempt it anyway as requested.
    window.close();
  };

  // Staggered letters configuration
  const titleText = "See You Again";
  const titleVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const letterVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 200 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated Warm Gradient Background */}
      <motion.div 
        className="absolute inset-0 opacity-40"
        animate={{ 
          background: [
            "radial-gradient(circle at 20% 30%, rgba(217, 119, 6, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 70%, rgba(225, 29, 72, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(217, 119, 6, 0.4) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onCancel}></div>

      {/* Cancel Button (Top Right) */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={onCancel}
        className="absolute top-6 right-6 p-3 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full transition-all duration-300 z-10"
        aria-label="Stay on page"
      >
        <X className="w-5 h-5" />
      </motion.button>

      {/* Content Container */}
      <div className="relative z-10 text-center flex flex-col items-center px-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2, duration: 0.6 }}
          className="mb-8 p-4 bg-white/5 rounded-full backdrop-blur-md border border-white/10"
        >
          <Heart className="w-8 h-8 text-rose-400" fill="currentColor" />
        </motion.div>

        {/* Animated Title */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="show"
          className="flex flex-wrap justify-center text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-8 tracking-tight"
          style={{ letterSpacing: '-0.02em' }}
        >
          {titleText.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>

        {/* Inspirational Message */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/80 font-medium tracking-wide leading-relaxed mb-12 text-balance"
        >
          Thank you for exploring my portfolio. I appreciate your time and interest in my work. Looking forward to connecting and creating impactful solutions together.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onCancel}
            className="px-8 py-3 rounded-full font-medium text-white/90 bg-white/10 hover:bg-white/20 border border-white/10 transition-all duration-300"
          >
            Stay on Page
          </button>
          <button
            onClick={handleCloseTab}
            className="px-8 py-3 rounded-full font-medium text-white bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-400 hover:to-orange-400 shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:shadow-[0_0_30px_rgba(225,29,72,0.5)] hover:scale-105 transition-all duration-300"
          >
            Close Tab
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ThankYouScreen;