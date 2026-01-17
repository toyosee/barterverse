import React from "react";
import { Zap, TrendingUp, Layers } from "lucide-react";

const VortexEnginePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 mt-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Hero */}
        <header className="text-center">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-black text-[10px] uppercase tracking-[0.4em] mb-6">
            <Zap className="w-5 h-5" />
            Vortex Engine
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-grotesk tracking-tight">
            The Intelligence Core of{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Exchange
            </span>
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
            The Vortex Engine is Barterverse’s autonomous economic intelligence system. It models human capability as
            programmable value, predicts optimal exchange paths, and continuously optimizes trust, efficiency, and
            long-term network growth.
          </p>
        </header>

        {/* Core Intelligence Layers */}
        <section className="grid md:grid-cols-3 gap-10">
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <TrendingUp className="w-6 h-6 text-cyan-400" />
            <h2 className="text-xl font-bold text-white">Dynamic Value Modeling</h2>
            <p className="text-slate-400">
              Skills, services, and resources are continuously scored using multi-dimensional market signals —
              demand velocity, scarcity, performance history, risk exposure, and systemic impact — producing a
              real-time Value Match Index (VMI) for every exchange scenario.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <Layers className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-bold text-white">Predictive Exchange Orchestration</h2>
            <p className="text-slate-400">
              The engine simulates exchange outcomes across multiple execution paths, identifying high-trust,
              low-friction, and compounding-value strategies — not just matching participants, but designing
              sustainable economic trajectories.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <Zap className="w-6 h-6 text-cyan-400" />
            <h2 className="text-xl font-bold text-white">Self-Optimizing Intelligence Loop</h2>
            <p className="text-slate-400">
              Every completed exchange feeds back into the engine’s learning core. Reinforcement signals update trust
              models, execution heuristics, and pricing surfaces — enabling the network to grow more accurate, more
              fair, and more capital-efficient over time.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default VortexEnginePage;
