import React from 'react';
import { Orbit, Users, Zap, Globe } from 'lucide-react';
import { Linkedin, Twitter } from 'lucide-react';

const AboutPage: React.FC = () => {
  const ourTeam = [
    {
      icon: Users,
      title: 'Networked Civilization',
      desc: 'A planetary network of builders, operators, and institutions coordinating production, intelligence, and execution through Barter Credits (BC) — forming a post-monetary value economy.',
    },
    {
      icon: Zap,
      title: 'Protocol Innovation',
      desc: 'We design economic infrastructure across AI, education, security, emergency systems, finance, and real-world coordination — replacing money-first systems with value-first execution.',
    },
    {
      icon: Globe,
      title: 'Civilizational Impact',
      desc: 'Solving real-world coordination failures — from talent underutilization to crisis response — by restructuring how societies measure, route, and settle value.',
    },
  ];
  
  return (
    <main className="min-h-screen bg-slate-950 relative overflow-hidden px-6 py-24 mt-20">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full animate-float-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-24">
        {/* Header */}
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-black text-[10px] uppercase tracking-[0.4em] mb-6">
            <Orbit className="w-4 h-4" />
            About Barterverse
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 font-grotesk tracking-tight">
            Engineering the Future of{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Value Exchange
            </span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            Barterverse is a decentralized economic operating system designed to replace money-first coordination
            with value-first execution. At its core is the Barter Credit (BC) protocol — a programmable unit of
            verified contribution — and an intelligent exchange layer that matches Initiators, Executors, and
            Connectors into self-optimizing production networks.
            <br />
            <br />
            Beyond exchange, Barterverse operates across education, infrastructure, security, finance, AI, and crisis
            response — transforming fragmented industries into interoperable economic domains governed by execution,
            reputation, and real-world outcomes.
          </p>
        </header>

        {/* Values grid */}
        <section className="grid md:grid-cols-3 gap-12">
          {ourTeam.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="glass-panel p-10 rounded-[2.5rem] border border-white/10 hover:border-cyan-400/30 transition-all"
            >
              <Icon className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </section>

        {/* Team Section */}
        <section className="space-y-12">
          <h2 className="text-center text-3xl font-bold text-white">
            Protocol{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Architects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Person 1 */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center space-y-4">
              <img
                src="/images/elijah-abolaji.png"
                alt="Elijah Abolaji"
                className="w-32 h-32 rounded-full object-cover object-top border-4 border-cyan-400"
              />
              <h3 className="text-xl font-bold text-white">Elijah Abolaji . O</h3>
              <p className="text-slate-400 text-sm">Co-Founder & Chief Systems Architect</p>
              <p className="text-slate-500 text-xs max-w-sm leading-relaxed">
                Economic systems designer and AI engineer focused on building decentralized coordination protocols,
                autonomous intelligence economies, and post-monetary infrastructure for global-scale execution.
              </p>
              <div className="flex gap-4 mt-2">
                <a href="https://linkedin.com/in/elijahabolaji" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition" />
                </a>
                <a href="https://x.com/tyabolaji" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition" />
                </a>
              </div>
            </div>

            {/* Person 2 */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center space-y-4">
              <img
                src="/images/lawrence-o.jpg"
                alt="Ogbuitepu Lawrence"
                className="w-32 h-32 rounded-full object-cover border-4 border-purple-400"
              />
              <h3 className="text-xl font-bold text-white">Ogbuitepu Lawrence . O</h3>
              <p className="text-slate-400 text-sm">Co-Founder & Chief Technology Officer</p>
              <p className="text-slate-500 text-xs max-w-sm leading-relaxed">
                Infrastructure engineer and systems architect specializing in scalable backend systems, distributed
                architectures, cryptographic security, and real-time coordination platforms powering the Barterverse
                execution layer.
              </p>
              <div className="flex gap-4 mt-2">
                <a href="https://linkedin.com/in/c-itp-lawrence-ogbuitepu" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 text-slate-400 hover:text-purple-400 transition" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5 text-slate-400 hover:text-purple-400 transition" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
