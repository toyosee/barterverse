import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-950 relative overflow-hidden px-6 py-24 mt-20">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full animate-float-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-purple-400 font-black text-[10px] uppercase tracking-[0.4em] mb-6">
            <Send className="w-4 h-4" />
            Contact Us
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 font-grotesk tracking-tight">
            Let’s Build <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Together</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            Whether you’re an Initiator, Executor, or Connector, we’d love to hear from you. 
            Reach out to collaborate, partner, or learn more about our universe of solutions.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-cyan-400" />
              <span className="text-slate-400">info@barterverse.io</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-cyan-400" />
              <span className="text-slate-400">+234 (80) 692‑139‑41</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-cyan-400" />
              <span className="text-slate-400">Abuja, Nigeria</span>
            </div>
          </div>

          {/* Contact form */}
          <form
            className="glass-panel p-10 rounded-[2.5rem] border border-white/10 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              // handle form submission
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-900/70 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-slate-900/70 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full bg-slate-900/70 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all"
              required
            ></textarea>
            <button className="w-full py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-xl font-black text-sm tracking-[0.2em] uppercase hover:scale-[1.02] transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;