import React from 'react';
import { Orbit, Users, Zap, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-950 relative overflow-hidden px-6 py-24 mt-20">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full animate-float-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-black text-[10px] uppercase tracking-[0.4em] mb-6">
            <Orbit className="w-4 h-4" />
            About Barterverse
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 font-grotesk tracking-tight">
            Decentralizing Value, <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Empowering Growth</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            Barterverse is a global universe dedicated to redefining how mastery and knowledge are exchanged. 
            At our core lies the Exchange Vortex and three essential actors — Initiators, Executors, and Connectors — 
            creating a self‑sustaining economy of growth. Beyond this foundation, we build smart solutions across 
            education, security, emergency response, AI innovation, and property technology.
          </p>
        </header>

        {/* Values grid */}
        <section className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: Users,
              title: 'Community',
              desc: 'A universe of citizens collaborating to trade skills and knowledge for collective progress.',
            },
            {
              icon: Zap,
              title: 'Innovation',
              desc: 'Smart solutions in EdTech, Security, Emergency Systems, AI, and PropTech.',
            },
            {
              icon: Globe,
              title: 'Impact',
              desc: 'Solving real‑world challenges while staying rooted in the ethos of exchange.',
            },
          ].map(({ icon: Icon, title, desc }) => (
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
      </div>
    </main>
  );
};

export default AboutPage;