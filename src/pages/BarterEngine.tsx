import React from "react";
import { Cpu, Users, Workflow } from "lucide-react";
import MatchingFlowDiagram from "../components/MatchingFlowDiagram";

const InternalBarteringEnginePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 mt-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full animate-float-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Hero */}
        <header className="text-center">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-black text-[10px] uppercase tracking-[0.4em] mb-6">
            <Cpu className="w-5 h-5" />
            Internal Bartering Engine
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-grotesk tracking-tight">
            Professionalism <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Meets</span> Credibility
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
            The Internal Bartering Engine ensures that every match in Barterverse is based on verified skills,
            professionalism, and credibility. It filters noise, enhances value, and keeps the community thriving.
          </p>
        </header>

        {/* Core Features */}
        <section className="grid md:grid-cols-3 gap-8">
          {/* ... existing feature blocks ... */}
        </section>

        {/* Matching Process */}
        <section className="glass-panel p-8 md:p-12 rounded-[2rem] border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <Workflow className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-bold text-white">Matching Process Flow</h2>
          </div>
          <p className="text-slate-400 mb-8">
            The engine follows a structured flow to ensure exchanges are fair, professional, and dispute-free.
          </p>
          <MatchingFlowDiagram />
        </section>

        {/* Community Impact */}
        <section className="text-center space-y-6">
          <Users className="w-8 h-8 text-cyan-400 mx-auto" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">Community <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Impact</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            By ensuring professionalism and credibility, the Internal Bartering Engine enhances value, strengthens trust,
            and keeps the Barterverse ecosystem running smoothly.
          </p>
        </section>
      </div>
    </main>
  );
};

export default InternalBarteringEnginePage;