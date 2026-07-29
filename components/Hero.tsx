import React from 'react';
import Section from './Section';
import { Bismillah, Divider } from './Ornament';
import { ThemeProps } from '../types';
import { motion } from 'framer-motion';

const Hero: React.FC<ThemeProps> = ({ isDark }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-28 pb-10 overflow-hidden">
      {/* Hero Specific Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-royal/20 to-midnight z-0"></div>
      
      <Section className="text-center relative z-10 w-full max-w-5xl mx-auto px-4">
        
        <div className="mb-8">
           <Bismillah isDark={isDark} />
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif uppercase tracking-[0.3em] text-xs md:text-sm text-gold-dim mb-12 font-bold"
        >
          Request the honor of your presence at the wedding of
        </motion.p>

        {/* Names & Parents - Changed to font-serif (Times New Roman) */}
        <div className="relative py-6 space-y-12">
          
          {/* Groom */}
          <div>
            <motion.h1 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="font-serif font-bold text-5xl md:text-7xl lg:text-8xl leading-none text-transparent bg-clip-text bg-gradient-to-br from-gold via-white to-gold drop-shadow-2xl mb-4 uppercase tracking-wider"
            >
              Sardhar Vali
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.0 }}
              className="font-serif text-sky-200/80 text-lg md:text-xl tracking-wide font-medium"
            >
              S/o T. Noor Mahammad & T. NoorJahan
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="font-serif text-5xl md:text-6xl text-pink-400 font-bold"
          >
            &
          </motion.div>
          
          {/* Bride */}
          <div>
            <motion.h1 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.5 }}
              className="font-serif font-bold text-5xl md:text-7xl lg:text-8xl leading-none text-transparent bg-clip-text bg-gradient-to-br from-gold via-white to-gold drop-shadow-2xl mb-4 uppercase tracking-wider"
            >
              Sumiya Begam
            </motion.h1>
             <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.7 }}
              className="font-serif text-pink-200/80 text-lg md:text-xl tracking-wide font-medium"
            >
              D/o S. Basheer & S. Haseena
            </motion.div>
          </div>

        </div>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="font-serif text-2xl md:text-3xl mt-12 text-sky-200 uppercase tracking-widest font-bold"
        >
          Nikah & Valima Ceremony
        </motion.p>

        <Divider isDark={isDark} className="my-10 opacity-50" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="flex justify-center"
        >
          <div className="relative group">
            {/* Box Container */}
            <div className="relative border border-gold/40 bg-midnight/60 backdrop-blur-md px-8 md:px-12 py-6 rounded-xl shadow-[0_0_30px_rgba(255,215,0,0.05)] overflow-hidden">
              
              {/* Decorative Corners */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gold"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gold"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gold"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gold"></div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-gold/5 opacity-50"></div>

              {/* Content */}
              <div className="flex flex-col items-center gap-3 relative z-10">
                <span className="font-serif text-3xl md:text-5xl text-gold drop-shadow-md font-bold uppercase tracking-widest">
                  August 23<sup>rd</sup> & 25<sup>th</sup>
                </span>
                <span className="font-serif text-xs md:text-sm uppercase tracking-[0.4em] text-white font-bold opacity-90 border-t border-white/20 pt-3 mt-1">
                  2026 • Kalyandurg & Atmakur
                </span>
              </div>
            </div>
            
            {/* Glow under box */}
            <div className="absolute -inset-1 bg-gold/20 blur-xl rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          </div>
        </motion.div>

      </Section>
    </div>
  );
};

export default Hero;