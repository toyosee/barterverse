import React, { useEffect, useState } from 'react';
import {
  Orbit,
  Twitter,
  Github,
  Linkedin,
  MessageSquare,
  Globe,
  ChevronUp,
  Activity,
} from 'lucide-react';

import {Link} from 'react-router-dom';

const Footer: React.FC = () => {
  const [showTop, setShowTop] = useState(false);
  const [protocolOnline] = useState(true);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-4 bg-slate-950 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute top-0 left-0 w-[280px] h-[280px] bg-cyan-500/5 blur-[100px] rounded-full animate-float-slow" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand + socials + status */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 blur opacity-50" />
                <div className="relative w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center border border-white/10">
                  <Orbit className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold tracking-[0.2em] text-white font-grotesk uppercase">
                BARTERVERSE
              </span>
            </div>

            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed font-light text-base">
              A global universe dedicated to the decentralization of value. We believe the future belongs to those who
              trade mastery for growth.
            </p>

            {/* Status + socials */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit">
                <Activity className={`w-4 h-4 ${protocolOnline ? 'text-cyan-400' : 'text-pink-400'}`} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
                  {protocolOnline ? 'Protocol: Online' : 'Protocol: Offline'}
                </span>
              </div>

              <div className="flex gap-4">
                {[
                  { icon: Twitter, label: 'Twitter' },
                  { icon: MessageSquare, label: 'Discord' },
                  { icon: Linkedin, label: 'LinkedIn' },
                  { icon: Github, label: 'Github' },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate-500 hover:border-cyan-500 hover:text-cyan-400 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md"
              onSubmit={(e) => {
                e.preventDefault();
                // Integrate with your newsletter API here
              }}
            >
              <input
                type="email"
                required
                placeholder="Subscribe with your email"
                className="flex-1 bg-slate-900/70 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all text-sm"
              />
              <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-black tracking-widest hover:scale-[1.02] transition-all">
                Subscribe
              </button>
            </form>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:col-span-2">
            <div>
              <h5 className="text-white font-bold mb-6 font-grotesk uppercase tracking-[0.2em] text-xs relative">
                Universe
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500" />
              </h5>
              <ul className="space-y-4 text-slate-500 text-sm font-light">
                <li>
                  <Link to="/vortex-engine" className="hover:text-cyan-400 transition-colors">
                    Vortex Engine
                  </Link>
                </li>
                <li>
                  <Link to="/knowledge-nodes" className="hover:text-cyan-400 transition-colors">
                    Knowledge Nodes
                  </Link>
                </li>
                <li>
                  <Link to="/barter-engine" className="hover:text-cyan-400 transition-colors">
                    Barter Engine
                  </Link>
                </li>
                <li>
                  <Link to="/citizenship" className="hover:text-cyan-400 transition-colors">
                    Citizenship
                  </Link>
                </li>
                <li>
                  <Link to="/governance" className="hover:text-cyan-400 transition-colors">
                    Governance
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold mb-6 font-grotesk uppercase tracking-[0.2em] text-xs relative">
                Solutions
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
              </h5>
              <ul className="space-y-4 text-slate-500 text-sm font-light">
                <li>
                  <button onClick={() => scrollToId('sectors')} className="hover:text-cyan-400 transition-colors">
                    PropTech Lab
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToId('sectors')} className="hover:text-cyan-400 transition-colors">
                    EdTech Core
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToId('sectors')} className="hover:text-cyan-400 transition-colors">
                    FinTech Galaxy
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToId('sectors')} className="hover:text-cyan-400 transition-colors">
                    Nexus Software
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToId('sectors')} className="hover:text-cyan-400 transition-colors">
                    Security Grid
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToId('sectors')} className="hover:text-cyan-400 transition-colors">
                    Emergency Systems
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToId('sectors')} className="hover:text-cyan-400 transition-colors">
                    AI Applications Hub
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="flex items-center gap-2 text-slate-600 text-xs tracking-widest uppercase font-bold">
            <Globe className="w-4 h-4" />
            BARTERVERSE PROTOCOL V2.5.0
          </div>
          <p className="text-slate-600 text-xs tracking-widest uppercase font-bold">
            © {new Date().getFullYear()} BARTERVERSE ECOSYSTEM
          </p>
          <div className="flex gap-6 text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em]">
            <Link to="/privacy-system" className="hover:text-white transition-colors">
              Privacy.sys
            </Link>

            <Link to="/exchange-protocols" className="hover:text-white transition-colors">
              Exchange.protocols
            </Link>
          </div>
        </div>
      </div>

      {/* Back-to-top floating button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all flex items-center justify-center backdrop-blur-md"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
};

export default Footer;