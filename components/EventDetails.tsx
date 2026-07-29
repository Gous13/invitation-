import React from 'react';
import { ThemeProps } from '../types';
import { Calendar, Clock, MapPin, Sun, Sunrise } from 'lucide-react';
import { motion } from 'framer-motion';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  type: 'nikah' | 'valima';
}

const EventCard: React.FC<EventCardProps> = ({ title, date, time, location, address, type }) => {
  const isNikah = type === 'nikah';

  // Theme Configuration
  const theme = isNikah ? {
    wrapper: "bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] border-sky-100/60 shadow-[0_10px_40px_-10px_rgba(56,189,248,0.1)]",
    title: "text-black",
    label: "text-black",
    text: "text-black",
    accent: "text-black", 
    iconWrapper: "bg-sky-100 text-black", 
    icon: Sunrise,
    divider: "from-transparent via-sky-200/60 to-transparent",
    glow: "from-sky-200/20 via-blue-100/10 to-transparent",
    particleColor: "bg-sky-400"
  } : {
    wrapper: "bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] border-amber-200/60 shadow-[0_10px_40px_-10px_rgba(245,158,11,0.15)]",
    title: "text-amber-900",
    label: "text-amber-800/80",
    text: "text-amber-800",
    accent: "text-amber-700",
    iconWrapper: "bg-amber-100 text-amber-700",
    icon: Sun,
    divider: "from-transparent via-amber-300/60 to-transparent",
    glow: "from-amber-200/30 via-orange-100/20 to-transparent",
    particleColor: "bg-amber-400"
  };

  const Icon = theme.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      className={`relative p-8 md:p-12 rounded-2xl border ${theme.wrapper} overflow-hidden group hover:shadow-2xl transition-all duration-700`}
    >
      <div className={`absolute top-0 left-0 w-[150%] h-[150%] bg-gradient-to-br ${theme.glow} blur-3xl opacity-60 pointer-events-none transform -translate-x-1/4 -translate-y-1/4 transition-transform duration-1000 group-hover:scale-110`}></div>
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${theme.divider} opacity-50`}></div>

      <div className="flex items-start justify-between mb-10 relative z-10">
        <div>
           <span className={`block text-[10px] uppercase tracking-[0.3em] font-bold mb-2 ${theme.label}`}>
             {isNikah ? 'Morning Ceremony' : 'Afternoon Banquet'}
           </span>
           <h3 className={`font-serif text-4xl md:text-5xl ${theme.title}`}>
             {title}
           </h3>
        </div>
        <div className={`p-3 rounded-full ${theme.iconWrapper} backdrop-blur-md shadow-sm ring-1 ring-white/50`}>
          <Icon size={24} strokeWidth={1.5} />
        </div>
      </div>

      <div className={`h-[1px] w-full bg-gradient-to-r ${theme.divider} mb-8 opacity-60`}></div>

      <div className="space-y-6 relative z-10 font-serif">
        <div className="flex items-start gap-5 group/item">
           <div className={`mt-1 ${theme.accent}`}>
             <Calendar size={20} strokeWidth={1.5} />
           </div>
           <div>
             <p className={`text-xl leading-none mb-1 ${theme.title}`}>{date}</p>
           </div>
        </div>

        <div className="flex items-start gap-5 group/item">
           <div className={`mt-1 ${theme.accent}`}>
             <Clock size={20} strokeWidth={1.5} />
           </div>
           <div>
             <p className={`text-xl leading-none mb-1 ${theme.title}`}>
               {time}
             </p>
             {isNikah && (
               <p className={`text-sm opacity-70 mt-1 ${theme.text}`}>Insha'Allah</p>
             )}
           </div>
        </div>

        <div className="flex items-start gap-5 group/item">
           <div className={`mt-1 ${theme.accent}`}>
             <MapPin size={20} strokeWidth={1.5} />
           </div>
           <div>
             <p className={`text-xl leading-tight mb-1 ${theme.title}`}>{location}</p>
             <p className={`text-sm opacity-80 ${theme.text}`}>{address}</p>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

const EventDetails: React.FC<ThemeProps> = () => {
  return (
    <div className="w-full relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-5xl mx-auto">
        <EventCard
          title="Nikah"
          date="Sunday, August 23rd, 2026"
          time="11:30 AM"
          location="Kalyandurg Doddagatta Road Function Hall"
          address="Doddagatta Road, kalyandurg, Anantapur District, Andhra Pradesh 515761"
          type="nikah"
        />
        
        <EventCard
          title="Valima"
          date="Tuesday, August 25th, 2026"
          time="1:00 PM"
          location="Bala venkatapuram Road, Atmakur"
          address="Atmakur, Anantapur District, Andhra Pradesh 515521"
          type="valima"
        />
      </div>
    </div>
  );
};

export default EventDetails;