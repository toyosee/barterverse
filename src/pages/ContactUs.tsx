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
        {/* Header */}
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-purple-400 font-black text-[10px] uppercase tracking-[0.4em] mb-6">
            <Send className="w-4 h-4" />
            Contact Barterverse
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 font-grotesk tracking-tight">
            Let’s Build the{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Future of Exchange
            </span>
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-xl font-light leading-relaxed">
            Whether you’re a founder, developer, investor, institution, or ecosystem partner — Barterverse is
            open to collaboration. Reach out to explore partnerships, integrations, pilots, or research
            opportunities across our economic and intelligence platforms.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-cyan-400" />
              <span className="text-slate-400">hello@thebarterverse.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-cyan-400" />
              <span className="text-slate-400">+234 806 921 3941</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-cyan-400" />
              <span className="text-slate-400">Abuja, Nigeria · Global Remote</span>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed max-w-md">
              For partnerships, investments, enterprise pilots, academic collaborations, or ecosystem
              integrations — we respond within 24–48 hours.
            </p>
          </div>

          {/* Contact form */}
          <form
            className="glass-panel p-10 rounded-[2.5rem] border border-white/10 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: wire to backend / email service / CRM
            }}
          >
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-slate-900/70 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all"
              required
            />
            <input
              type="email"
              placeholder="Work Email"
              className="w-full bg-slate-900/70 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all"
              required
            />
            <textarea
              placeholder="Tell us what you'd like to collaborate on (partnership, product, research, investment, integration, etc.)"
              rows={5}
              className="w-full bg-slate-900/70 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all"
              required
            ></textarea>
            <button className="w-full py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-xl font-black text-sm tracking-[0.2em] uppercase hover:scale-[1.02] transition-all">
              Start the Conversation
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
