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
            The Heart of <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Exchange</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
            The Vortex Engine is the analytical core of Barterverse. It synchronizes skills, calculates value matches, and generates strategies for mutual growth.
          </p>
        </header>

        {/* Content blocks */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <TrendingUp className="w-6 h-6 text-cyan-400" />
            <h2 className="text-xl font-bold text-white">Value Mapping</h2>
            <p className="text-slate-400">
              Every skill is assigned a value score based on demand, rarity, and impact. The engine ensures exchanges are fair by calculating the Value Match Index (VMI).
            </p>
          </div>
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <Layers className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-bold text-white">Strategic Pathways</h2>
            <p className="text-slate-400">
              Beyond numbers, the engine generates step-by-step pathways for implementation, ensuring exchanges are practical and sustainable.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default VortexEnginePage;