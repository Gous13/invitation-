import React from 'react';

interface OrnamentProps {
  className?: string;
  isDark?: boolean;
}

export const Divider: React.FC<OrnamentProps> = ({ className = '', isDark }) => (
  <div className={`flex items-center justify-center gap-6 py-6 ${className}`}>
    <div className="h-[1px] w-24 md:w-40 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
    
    <div className="relative flex items-center justify-center">
      <div className="rotate-45 w-2 h-2 border border-gold bg-gold/20"></div>
    </div>

    <div className="h-[1px] w-24 md:w-40 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
  </div>
);

export const Bismillah: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <div className="text-center relative py-4">
    {/* Switched to font-urdu (Nastaliq) for authentic header style */}
    <div 
      className="font-urdu text-3xl md:text-5xl tracking-wide leading-[2.2] text-gold drop-shadow-md select-none py-2"
      dir="rtl"
      lang="ur"
    >
      بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
    </div>
    {/* Glow under text */}
    <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full opacity-20 pointer-events-none"></div>
  </div>
);