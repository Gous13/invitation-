import React from 'react';
import Section from './Section';
import { Divider } from './Ornament';
import { ThemeProps } from '../types';
import { Heart } from 'lucide-react';

const Closing: React.FC<ThemeProps> = ({ isDark }) => {
  return (
    <div className="relative w-full pt-12 pb-20 overflow-hidden mt-8 rounded-t-3xl">
      
      {/* 1. Geometric Pattern Overlay */}
      <div className={`absolute inset-0 bg-islamic-pattern ${isDark ? 'opacity-[0.07] mix-blend-overlay' : 'opacity-[0.03]'} pointer-events-none`}></div>
      
      {/* Gradient fade to blend with background */}
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-80 pointer-events-none"></div>

      {/* 2. Golden Dust Motes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
           <div
            key={i}
            className="absolute bg-gold rounded-full opacity-40 blur-[0.5px] animate-twinkle"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDuration: Math.random() * 5 + 4 + 's',
              animationDelay: Math.random() * 5 + 's',
            }}
          />
        ))}
      </div>

      <Section className="text-center relative z-10 px-4">
        
        {/* Footer Monogram Logo - Changed from R&A to A&R - EXCEPTION: STAYS FONT-SCRIPT */}
        <div className="flex items-center justify-center gap-3 mb-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
            <span className="font-script text-4xl text-gold leading-none pb-1">A</span>
            <Heart className="w-4 h-4 text-gold fill-gold" />
            <span className="font-script text-4xl text-gold leading-none pb-1">R</span>
        </div>

        <Divider isDark={isDark} />
        
        <div className="relative inline-block max-w-2xl mx-auto my-8">
            <div className="absolute inset-0 bg-gold/10 blur-3xl rounded-full opacity-20 pointer-events-none transform scale-150"></div>
            
            <p className={`relative font-serif text-2xl md:text-3xl leading-relaxed font-bold ${isDark ? 'text-gray-200' : 'text-slate-600'}`}>
            "O Allah, bless their union and place affection and mercy between them."
            </p>
        </div>

        <div className="mt-12 space-y-4">
            <div className={`font-serif text-xs uppercase tracking-[0.25em] font-bold opacity-80 ${isDark ? 'text-sky-300' : 'text-sky-600'}`}>
            With Love & Blessings
            </div>
            <div className={`font-serif text-4xl md:text-5xl font-bold uppercase tracking-widest ${isDark ? 'text-pink-300' : 'text-pink-500'} drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]`}>
            The Families
            </div>
        </div>
      </Section>
    </div>
  );
};

export default Closing;