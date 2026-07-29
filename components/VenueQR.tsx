import React from 'react';
import Section from './Section';
import { ThemeProps } from '../types';
import { QRCodeSVG } from 'qrcode.react';
import { ExternalLink } from 'lucide-react';

const VenueBlock: React.FC<{ 
  title: string; 
  link: string; 
  isDark: boolean;
  label: string;
  colorClass: string;
}> = ({ title, link, isDark, label, colorClass }) => (
  <div className="flex flex-col items-center w-full md:w-auto">
    <a href={link} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center space-y-6">
      <div className="relative p-4 bg-white rounded-xl shadow-xl transition-shadow duration-300 hover:shadow-2xl">
        <QRCodeSVG 
          value={link} 
          size={140} 
          fgColor="#0B1026"
          bgColor="#FFFFFF"
          level="M"
        />
        <div className={`absolute -bottom-3 -right-3 p-2 rounded-full bg-midnight border-2 border-white ${colorClass}`}>
          <ExternalLink size={14} />
        </div>
      </div>
      
      <div className="text-center">
        <span className={`inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest font-bold mb-3 ${colorClass}`}>
          {label}
        </span>
        <h4 className="font-serif text-xl md:text-2xl text-white transition-colors hover:text-gold font-bold uppercase tracking-wider">
          {title}
        </h4>
        <p className="font-serif text-[10px] uppercase tracking-widest text-gray-500 mt-2 font-bold">
          Tap to Open Maps
        </p>
      </div>
    </a>
  </div>
);

const VenueQR: React.FC<ThemeProps> = ({ isDark }) => {
  return (
    <Section className="py-8">
      <div className="text-center mb-8">
        <h2 className="font-serif text-4xl text-gold-dim mb-4 font-bold uppercase tracking-widest">Locations</h2>
        <div className="w-16 h-[1px] bg-white/20 mx-auto"></div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 w-full">
        <VenueBlock 
          isDark={isDark}
          label="Nikah Venue"
          title="Kalyandurg"
          link="https://maps.app.goo.gl/71qKQEapkTzWfpCp7"
          colorClass="text-pink-400"
        />
        <VenueBlock 
          isDark={isDark}
          label="Valima Venue"
          title="Atmakur"
          link="https://maps.app.goo.gl/oRbscoWgYA5Pnwdj9"
          colorClass="text-sky-400"
        />
      </div>
    </Section>
  );
};

export default VenueQR;