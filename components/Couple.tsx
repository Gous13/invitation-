import React from 'react';
import Section from './Section';
import { ThemeProps } from '../types';
import { motion } from 'framer-motion';

const InitialsCircle: React.FC<{ initials: string; isDark?: boolean; accent?: 'sky' | 'pink' }> = ({ initials, isDark = false, accent = 'sky' }) => {
  const accentColor = accent === 'sky' ? (isDark ? 'from-sky-600 to-sky-400' : 'from-sky-100 to-sky-300') : (isDark ? 'from-pink-600 to-pink-400' : 'from-pink-100 to-pink-300');

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className={`absolute inset-0 bg-gradient-to-br ${accentColor} opacity-20`} />
      <span className={`relative z-10 font-serif text-6xl md:text-7xl lg:text-8xl font-black tracking-[0.18em] ${isDark ? 'text-white' : 'text-black'}`}>{initials}</span>
    </div>
  );
};

const Couple: React.FC<ThemeProps> = ({ isDark }) => {
  return (
    <Section className="text-center space-y-12">
      
      {/* Groom */}
      <div className="flex flex-col items-center group">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className={`w-40 h-40 md:w-52 md:h-52 rounded-full flex items-center justify-center mb-8 border-[4px] shadow-2xl transition-all duration-700 relative overflow-hidden ${
            isDark ? 'border-sky-700 shadow-sky-900/50' : 'bg-white border-sky-200 shadow-sky-200/50'
          }`}
        >
          <InitialsCircle initials="SV" isDark={isDark} accent="sky" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>
        </motion.div>

        <h2 className={`font-serif text-4xl md:text-5xl mb-3 transition-colors font-bold uppercase tracking-wider ${isDark ? 'text-gray-100' : 'text-slate-800'}`}>
          Sardhar Vali
        </h2>
        <p className={`font-serif text-xs tracking-[0.3em] uppercase font-bold ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>The Groom</p>
      </div>

      <div className={`font-serif text-4xl md:text-5xl font-bold ${isDark ? 'text-pink-300' : 'text-pink-400'}`}>&</div>

      {/* Bride */}
      <div className="flex flex-col items-center group">
         <motion.div 
          whileHover={{ scale: 1.05 }}
          className={`w-40 h-40 md:w-52 md:h-52 rounded-full flex items-center justify-center mb-8 border-[4px] shadow-2xl transition-all duration-700 relative overflow-hidden ${
            isDark ? 'border-pink-700 shadow-pink-900/50' : 'bg-white border-pink-200 shadow-pink-200/50'
          }`}
        >
          <InitialsCircle initials="SB" isDark={isDark} accent="pink" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>
        </motion.div>

        <h2 className={`font-serif text-4xl md:text-5xl mb-3 transition-colors font-bold uppercase tracking-wider ${isDark ? 'text-gray-100' : 'text-slate-800'}`}>
          Sumiya Begam
        </h2>
        <p className={`font-serif text-xs tracking-[0.3em] uppercase font-bold ${isDark ? 'text-pink-400' : 'text-pink-500'}`}>The Bride</p>
      </div>

    </Section>
  );
};

export default Couple;