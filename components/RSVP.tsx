import React, { useState } from 'react';
import Section from './Section';
import { ThemeProps } from '../types';
import { Check, X, MessageCircle, CheckCircle } from 'lucide-react';

const RSVP: React.FC<ThemeProps> = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    attendance: 'yes',
    event: 'both',
    message: ''
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "919515518756";
    const status = formData.attendance === 'yes' ? "Joyfully Accepting" : "Regretfully Declining";
    let message = `*Wedding Invitation RSVP*\n`;
    message += `--------------------------------\n`;
    message += `*Name:* ${formData.name}\n`;
    message += `*Status:* ${status}\n`;
    if (formData.attendance === 'yes') {
      message += `*Guests:* ${formData.guests}\n`;
      message += `*Event:* ${formData.event.toUpperCase()}\n`;
    }
    if (formData.message) {
      message += `\n*Message:*\n${formData.message}`;
    } else {
      message += `\n*Message:*\nNo specific message.`;
    }
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Section className="w-full max-w-4xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden p-[1px] bg-gradient-to-br from-gold/30 via-transparent to-pink/30 shadow-2xl">
        <div className="bg-royal/60 backdrop-blur-xl p-8 md:p-16 rounded-3xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <div className="text-center mb-12 relative z-10">
            <h3 className="font-serif text-5xl md:text-6xl mb-4 text-white drop-shadow-md font-bold uppercase tracking-wider">Send Your Wishes</h3>
            <p className="font-serif text-xs uppercase tracking-[0.3em] text-gold-dim font-bold">We Heartfully Welcome You</p>
          </div>

          <form onSubmit={handleWhatsAppSubmit} className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider font-bold text-sky-200 ml-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-midnight/50 border border-white/10 rounded-lg py-4 px-5 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all font-serif text-white placeholder-white/20"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider font-bold text-sky-200 ml-1">Number of Guests</label>
                <select 
                  className="w-full bg-midnight/50 border border-white/10 rounded-lg py-4 px-5 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all font-serif text-white appearance-none cursor-pointer"
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  disabled={formData.attendance === 'no'}
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num} className="bg-midnight text-white">{num} Person{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-wider font-bold text-sky-200 ml-1 mb-3 text-center md:text-left">Will you be attending?</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({...formData, attendance: 'yes'})}
                  className={`flex items-center justify-center gap-3 py-4 px-6 rounded-lg border transition-all duration-300 ${
                    formData.attendance === 'yes'
                      ? 'bg-sky-600/20 border-sky-400 text-sky-200 shadow-[0_0_20px_rgba(56,189,248,0.2)] font-bold'
                      : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30 font-bold'
                  }`}
                >
                  <CheckCircle size={20} className={formData.attendance === 'yes' ? 'text-sky-400' : 'opacity-0'} />
                  <span className="font-serif uppercase tracking-wider">Joyfully Accept</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({...formData, attendance: 'no'})}
                  className={`flex items-center justify-center gap-3 py-4 px-6 rounded-lg border transition-all duration-300 ${
                    formData.attendance === 'no'
                      ? 'bg-pink-600/20 border-pink-400 text-pink-200 shadow-[0_0_20px_rgba(244,114,182,0.2)] font-bold'
                      : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30 font-bold'
                  }`}
                >
                  <X size={20} className={formData.attendance === 'no' ? 'text-pink-400' : 'opacity-0'} />
                  <span className="font-serif uppercase tracking-wider">Regretfully Decline</span>
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-wider font-bold text-sky-200 ml-1">Message (Optional)</label>
              <textarea 
                className="w-full bg-midnight/50 border border-white/10 rounded-lg py-4 px-5 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all font-serif text-white placeholder-white/20 h-32 resize-none"
                placeholder="Write a message to the couple..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-gold-dim to-gold text-midnight font-bold py-5 rounded-lg uppercase tracking-[0.2em] hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] transition-all duration-500 transform hover:-translate-y-1 flex items-center justify-center gap-3 font-serif"
            >
              <span>Send via WhatsApp</span>
              <MessageCircle size={18} />
            </button>

          </form>
        </div>
      </div>
    </Section>
  );
};

export default RSVP;