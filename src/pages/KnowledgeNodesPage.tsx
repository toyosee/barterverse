import React from "react";
import { Network, BookOpen, Globe } from "lucide-react";

const KnowledgeNodesPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 mt-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full animate-float-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        <header className="text-center">
          <div className="inline-flex items-center gap-2 text-purple-400 font-black text-[10px] uppercase tracking-[0.4em] mb-6">
            <Network className="w-5 h-5" />
            Knowledge Nodes
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-grotesk tracking-tight">
            Distributed <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Wisdom</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
            Knowledge Nodes are decentralized hubs where skills, insights, and experiences converge to fuel collective intelligence.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-12">
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <BookOpen className="w-6 h-6 text-cyan-400" />
            <h2 className="text-xl font-bold text-white">Learning Hubs</h2>
            <p className="text-slate-400">
              Each node acts as a micro-university, enabling peer-to-peer learning and skill transfer without traditional barriers.
            </p>
          </div>
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <Globe className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-bold text-white">Global Connectivity</h2>
            <p className="text-slate-400">
              Nodes are interconnected across geographies, ensuring knowledge flows seamlessly across cultures and disciplines.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default KnowledgeNodesPage;