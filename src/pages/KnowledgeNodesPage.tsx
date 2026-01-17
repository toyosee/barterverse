import React from "react";
import { Network, BookOpen, Globe } from "lucide-react";

const KnowledgeNodesPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 mt-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full animate-float-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Hero */}
        <header className="text-center">
          <div className="inline-flex items-center gap-2 text-purple-400 font-black text-[10px] uppercase tracking-[0.4em] mb-6">
            <Network className="w-5 h-5" />
            Knowledge Nodes
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-grotesk tracking-tight">
            Distributed <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Intelligence Infrastructure</span>
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
            Knowledge Nodes are modular, decentralized intelligence hubs that power learning, coordination, and value
            creation across the Barterverse. They transform expertise into a network-native asset class — composable,
            verifiable, and exchangeable.
          </p>
        </header>

        {/* Pillars */}
        <section className="grid md:grid-cols-3 gap-10">
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <BookOpen className="w-6 h-6 text-cyan-400" />
            <h2 className="text-xl font-bold text-white">Cognitive Infrastructure</h2>
            <p className="text-slate-400">
              Each node functions as a programmable learning and execution layer — hosting skills, workflows,
              playbooks, and institutional memory. Knowledge is structured into reusable primitives that compound over
              time and across domains.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <Network className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-bold text-white">Composable Expertise Graphs</h2>
            <p className="text-slate-400">
              Nodes interlink into a global expertise graph, enabling rapid discovery of capabilities, trust signals,
              and execution capacity. This allows Barterverse to route problems, projects, and exchanges to the most
              effective human and institutional actors in real time.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <Globe className="w-6 h-6 text-cyan-400" />
            <h2 className="text-xl font-bold text-white">Global Knowledge Liquidity</h2>
            <p className="text-slate-400">
              Knowledge Nodes dissolve geographic, economic, and institutional silos by enabling permissionless access
              to skills and insights. This creates a globally liquid intelligence layer where learning, collaboration,
              and value exchange occur at internet scale.
            </p>
          </div>
        </section>

        {/* Strategic Value */}
        <section className="glass-panel p-8 md:p-12 rounded-[2rem] border border-white/10">
          <h2 className="text-xl font-bold text-white mb-6">Strategic Role in the Barterverse</h2>
          <p className="text-slate-400 leading-relaxed">
            Knowledge Nodes are the R&D backbone of the Barterverse economy. They accelerate skill formation, reduce
            onboarding friction, and continuously upgrade the network’s productive capacity. As nodes mature, they
            evolve into autonomous centers of excellence — driving innovation, coordinating talent, and powering
            cross-sector exchange protocols through verifiable intelligence rather than centralized institutions.
          </p>
        </section>
      </div>
    </main>
  );
};

export default KnowledgeNodesPage;
