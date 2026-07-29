import React from 'react';
import Section from './Section';
import { ThemeProps } from '../types';

const QuranVerse: React.FC<ThemeProps> = ({ isDark }) => {
  return (
    <Section className="text-center px-4">
      <div className={`inline-block p-8 md:p-10 rounded-2xl border ${isDark ? 'border-sky-800 bg-slate-800/50' : 'border-sky-100 bg-sky-50/50'}`}>
        <p className={`font-serif text-xl md:text-2xl leading-relaxed mb-6 font-medium ${isDark ? 'text-gray-200' : 'text-slate-700'}`}>
          "And of His signs is that He created for you from yourselves mates that you may find tranquillity in them; and He placed between you affection and mercy."
        </p>
        <p className={`font-sans text-xs uppercase tracking-[0.2em] font-bold ${isDark ? 'text-pink-400' : 'text-pink-500'}`}>
          Surah Ar-Rum, 30:21
        </p>
      </div>
    </Section>
  );
};

export default QuranVerse;