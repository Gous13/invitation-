import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Hero from './components/Hero';
import QuranVerse from './components/QuranVerse';
import Couple from './components/Couple';
import EventDetails from './components/EventDetails';
import VenueQR from './components/VenueQR';
import Countdown from './components/Countdown';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import Closing from './components/Closing';
import Entrance from './components/Entrance';
import StarShower from './components/StarShower';

const Lantern: React.FC<{ left: string; height: string; delay: string }> = ({ left, height, delay }) => (
  <div 
    className="absolute origin-top animate-sway"
    style={{ left, height: `calc(${height} + 20px)`, animationDelay: delay }}
  >
    <div className="w-[2px] bg-gold/50 h-full mx-auto"></div>
    <div className="w-12 h-16 bg-gradient-to-b from-royal to-black border border-gold/40 rounded-lg relative -mt-1 mx-auto shadow-[0_0_30px_rgba(255,215,0,0.2)] flex items-center justify-center">
      <div className="absolute inset-2 border border-gold/20 rounded opacity-50"></div>
      <div className="w-2 h-4 bg-gold rounded-full blur-[5px] animate-twinkle"></div>
    </div>
    <div className="w-[2px] h-8 bg-gold/50 mx-auto"></div>
  </div>
);

const App: React.FC = () => {
  const [audioStarted, setAudioStarted] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Entrance State - Always true on load now
  const [showEntrance, setShowEntrance] = useState(true);

  // Star Shower State
  const [showStarShower, setShowStarShower] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'couple', 'events', 'venue', 'rsvp'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const handleEntranceComplete = () => {
    setShowEntrance(false);
    setShowStarShower(true);
  };

  const handleStarShowerComplete = () => {
    setShowStarShower(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Couple', href: '#couple' },
    { name: 'Events', href: '#events' },
    { name: 'Venue', href: '#venue' },
    { name: 'RSVP', href: '#rsvp' },
  ];
  // 1️⃣ Scroll handling
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
    const sections = ['home', 'couple', 'events', 'venue', 'rsvp'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section);
        }
      }
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// 2️⃣ Prevent scroll when menu is open
useEffect(() => {
  if (isMenuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
}, [isMenuOpen]);

// 3️⃣ Audio effect ← paste here
useEffect(() => {
  if (!audioStarted) return;

  const audio = new Audio('/audio/nikah.mpeg');
  audio.loop = true;
  audio.volume = 0.6;
  audio.play().catch(() => {});

  return () => {
    audio.pause();
    audio.currentTime = 0;
  };
}, [audioStarted]);


  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 90; // Offset for navbar
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Logic to determine navbar background: Scrolled OR Menu Open
  const navBackgroundClass = scrolled 
    ? 'bg-midnight/95 backdrop-blur-xl shadow-lg border-b border-white/5' 
    : 'bg-transparent';

  return (
    <div className="min-h-screen bg-midnight text-white overflow-x-hidden relative font-sans selection:bg-pink-500 selection:text-white flex flex-col">
          {/* Background Audio */}
    <audio autoPlay loop>
      <source src="/audio/nikah.mpeg" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
    {!audioStarted && (
  <div
    onClick={() => setAudioStarted(true)}
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 9999,
      cursor: 'pointer'
    }}
  />
)}

      {/* Entrance Animation Overlay */}
      <AnimatePresence>
        {showEntrance && <Entrance onComplete={handleEntranceComplete} />}
      </AnimatePresence>

      {/* Star Shower Animation - Plays after entrance */}
      {showStarShower && <StarShower onComplete={handleStarShowerComplete} />}

      {/* Background & Decor */}
      <div className="fixed inset-0 bg-pattern pointer-events-none z-0"></div>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-900/30 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-900/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="hidden md:block fixed top-0 w-full z-10 pointer-events-none">
        <Lantern left="10%" height="150px" delay="0s" />
        <Lantern left="20%" height="100px" delay="1s" />
        <Lantern left="80%" height="120px" delay="0.5s" />
        <Lantern left="90%" height="180px" delay="1.5s" />
      </div>

      {/* Navigation Bar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBackgroundClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            
            {/* Logo Section - EXCEPTION: STAYS FONT-SCRIPT */}
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex-shrink-0 flex items-center gap-3 group cursor-pointer relative z-50 transition-transform duration-300 hover:scale-105"
            >
              <span className="font-[Pinyon_Script] text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] lg:text-[4rem] font-bold tracking-[0.15em] leading-none text-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">S</span>
              <div className="relative flex items-center justify-center">
                <Heart className="w-5 h-5 md:w-6 md:h-6 text-gold fill-gold animate-pulse drop-shadow-md relative z-10" />
                <div className="absolute inset-0 bg-gold blur-md opacity-40 animate-pulse"></div>
              </div>
              <span className="font-[Pinyon_Script] text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] lg:text-[4rem] font-bold tracking-[0.15em] leading-none text-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">S</span>
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name} 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-sm uppercase tracking-widest font-bold transition-all duration-300 hover:text-gold relative group py-2 ${activeSection === link.href.substring(1) ? 'text-gold' : 'text-gray-300'}`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold transform transition-transform duration-300 ${activeSection === link.href.substring(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden z-50 flex items-center relative">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-white hover:text-gold transition-colors p-2 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40 flex flex-col justify-start pt-32"
            >
              <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div>
              
              <div className="flex flex-col items-center space-y-2 relative z-10 p-6 w-full max-w-md mx-auto">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="w-full"
                  >
                    <a
                      href={link.href} 
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`group flex items-center justify-between w-full py-5 px-6 rounded-2xl transition-all duration-300 border ${
                        activeSection === link.href.substring(1) 
                          ? 'bg-white/10 border-gold/30 text-gold shadow-[0_0_20px_rgba(255,215,0,0.1)]' 
                          : 'bg-transparent border-transparent text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span className="text-xl font-serif tracking-wider font-bold">{link.name}</span>
                      <span className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeSection === link.href.substring(1) ? 'bg-gold' : 'bg-white/10 group-hover:bg-gold/50'
                      }`}></span>
                    </a>
                  </motion.div>
                ))}
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-12 pt-8 border-t border-white/10 w-full text-center"
                >
                  <p className="font-script text-4xl text-gold/30">A & R</p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center w-full flex-grow">
        <section id="home" className="w-full">
          <Hero isDark={true} />
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-20">
          <Countdown isDark={true} targetDate="2026-08-23T11:30:00" />
          <QuranVerse isDark={true} />
          <section id="couple" className="scroll-mt-32">
             <Couple isDark={true} />
          </section>
          <section id="events" className="scroll-mt-32">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gold mb-4 font-bold uppercase tracking-widest">Celebration</h2>
              <p className="font-serif text-xs uppercase tracking-[0.3em] text-sky-200 font-bold">The Wedding Events</p>
            </div>
            <EventDetails isDark={true} />
          </section>
          <section id="venue" className="scroll-mt-32">
            <VenueQR isDark={true} />
          </section>
          <section id="rsvp" className="scroll-mt-32">
            <RSVP isDark={true} />
          </section>
        </div>

        <Closing isDark={true} />
      </main>
      
      <Footer isDark={true} />
    </div>
  );
};

export default App;