import React from 'react';
import { ThemeProps } from '../types';

const Footer: React.FC<ThemeProps> = () => {
  return (
    <footer className="relative w-full bg-black z-10 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center text-center">
        <p className="text-sm text-white uppercase tracking-[0.4em] font-semibold">2026</p>
      </div>
    </footer>
  );
};

export default Footer;