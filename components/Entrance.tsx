import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface EntranceProps {
  onComplete: () => void;
}

const Entrance: React.FC<EntranceProps> = ({ onComplete }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleEnter = () => {
    setIsOpening(true);
    // Wait for animation to finish before unmounting
    setTimeout(() => {
      onComplete();
    }, 2500);
  };

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-midnight perspective-[2000px] ${isOpening ? 'pointer-events-none' : ''}`}>
      
      {/* Background showing through the opening doors (The Main App is behind this component in z-index, 
          but this div acts as a transition backdrop if needed) */}
      <motion.div 
        animate={{ opacity: isOpening ? 0 : 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black/50 z-0"
      />

      {/* LEFT DOOR */}
      <motion.div
        initial={{ rotateY: 0, x: 0 }}
        animate={{ 
          rotateY: isOpening ? -110 : 0,
          x: isOpening ? '-50%' : 0
        }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'left center' }}
        className="absolute left-0 top-0 w-1/2 h-full z-20 flex flex-col justify-center items-end shadow-2xl backface-hidden"
      >
        {/* Wood Texture Base */}
        <div className="absolute inset-0 bg-[#2C1810] overflow-hidden">
          {/* Vertical Wood Grain Simulation */}
          <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#000_2px,#000_4px)] mix-blend-multiply filter blur-[1px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        </div>

        {/* Golden Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-color-dodge"></div>

        {/* Decorative Arch Frame (Left Half) */}
        <div className="absolute top-[5%] bottom-[5%] left-[5%] right-0 border-t-[8px] border-l-[8px] border-b-[8px] border-gold/30 rounded-tl-[100px] rounded-bl-[20px] bg-[#1a0f0a]/40 backdrop-blur-sm"></div>
        
        {/* Inner Detailed Panel */}
        <div className="absolute top-[15%] bottom-[15%] left-[15%] right-[5%] border border-gold/20 flex flex-col items-center justify-center gap-4 py-8">
           <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-gold/30 to-transparent"></div>
        </div>

        {/* Central Handle Area */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30">
          <div className="w-4 h-32 rounded-full bg-gradient-to-b from-yellow-900 via-yellow-600 to-yellow-900 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] flex items-center justify-center">
             <div className="w-1 h-20 bg-gold/50 rounded-full"></div>
          </div>
          {/* Ring Knocker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-4">
             <div className="w-12 h-12 rounded-full border-4 border-yellow-700 shadow-lg mt-8"></div>
          </div>
        </div>
        
        {/* Door Edge Highlight */}
        <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-yellow-900 via-yellow-500 to-yellow-900"></div>

      </motion.div>

      {/* RIGHT DOOR */}
      <motion.div
        initial={{ rotateY: 0, x: 0 }}
        animate={{ 
          rotateY: isOpening ? 110 : 0,
          x: isOpening ? '50%' : 0 
        }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'right center' }}
        className="absolute right-0 top-0 w-1/2 h-full z-20 flex flex-col justify-center items-start shadow-2xl backface-hidden"
      >
        {/* Wood Texture Base */}
        <div className="absolute inset-0 bg-[#2C1810] overflow-hidden">
          {/* Vertical Wood Grain */}
          <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#000_2px,#000_4px)] mix-blend-multiply filter blur-[1px]"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        </div>

        {/* Golden Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-color-dodge"></div>

        {/* Decorative Arch Frame (Right Half) */}
        <div className="absolute top-[5%] bottom-[5%] right-[5%] left-0 border-t-[8px] border-r-[8px] border-b-[8px] border-gold/30 rounded-tr-[100px] rounded-br-[20px] bg-[#1a0f0a]/40 backdrop-blur-sm"></div>
        
        {/* Inner Detailed Panel */}
        <div className="absolute top-[15%] bottom-[15%] right-[15%] left-[5%] border border-gold/20 flex flex-col items-center justify-center gap-4 py-8">
           <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-gold/30 to-transparent"></div>
        </div>

        {/* Central Handle Area */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30">
          <div className="w-4 h-32 rounded-full bg-gradient-to-b from-yellow-900 via-yellow-600 to-yellow-900 shadow-[-2px_2px_10px_rgba(0,0,0,0.5)] flex items-center justify-center">
             <div className="w-1 h-20 bg-gold/50 rounded-full"></div>
          </div>
          {/* Ring Knocker */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-4">
             <div className="w-12 h-12 rounded-full border-4 border-yellow-700 shadow-lg mt-8"></div>
          </div>
        </div>

        {/* Door Edge Highlight */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-yellow-900 via-yellow-500 to-yellow-900"></div>

      </motion.div>


      {/* Center Content Overlay (Text & Button) */}
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{ 
          opacity: isOpening ? 0 : 1,
          scale: isOpening ? 1.5 : 1,
          z: isOpening ? -500 : 0
        }}
        transition={{ duration: 1.5 }}
        className="relative z-50 flex flex-col items-center text-center p-12"
      >
        {/* Islamic Bismillah Emblem */}
        <div className="mb-8 relative">
           <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full"></div>
           <div className="font-urdu text-4xl md:text-6xl text-gold drop-shadow-[0_4px_8px_rgba(0,0,0,1)] relative z-10 leading-relaxed" dir="rtl">
             بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
           </div>
        </div>

        <div className="space-y-2 mb-10">
          <h2 className="font-serif text-lg md:text-xl text-gray-300 tracking-[0.2em] uppercase drop-shadow-md">
            The Wedding Celebration of
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </div>
        
        <div className="bg-black/40 backdrop-blur-md p-1 rounded-full border border-gold/30 hover:border-gold/80 transition-colors duration-500 cursor-pointer">
            <button
            onClick={handleEnter}
            className="relative px-16 py-4 rounded-full bg-gradient-to-b from-[#422006] to-[#2C1810] border border-white/5 text-gold font-serif text-xl tracking-widest shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden group"
            >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">ENTER</span>
            
            {/* Hover shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
        </div>
      </motion.div>
      
      {/* Cinematic Light Burst upon opening */}
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: isOpening ? [0, 1, 0] : 0 }}
         transition={{ duration: 2, times: [0, 0.2, 1] }}
         className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-white/20 to-transparent mix-blend-overlay"
      />

    </div>
  );
};

export default Entrance;