import React from "react";
import { UserCheck, HeartHandshake, Star, ShieldCheck, Globe } from "lucide-react";
import CitizenshipFlowDiagram from "../components/CitizenshipFlowDiagram";

const CitizenshipPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 mt-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-cyan-500/10 blur-[140px] rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-20">
        {/* Hero */}
        <header className="text-center">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-black text-[10px] uppercase tracking-[0.4em] mb-6">
            <UserCheck className="w-5 h-5" />
            Citizenship Protocol
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-grotesk tracking-tight">
            Identity, Rights & Reputation in{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Barterverse
            </span>
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
            Citizenship in Barterverse is a cryptographically verifiable economic identity — defining who you are,
            what you can execute, how much value you can transact, and the level of trust the network assigns to you.
            It transforms users into sovereign participants in a decentralized production economy.
          </p>
        </header>

        {/* Community Bonds + Recognition */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <HeartHandshake className="w-7 h-7 text-purple-400" />
            <h2 className="text-xl font-bold text-white">Trust Networks</h2>
            <p className="text-slate-400 leading-relaxed">
              Citizens form reputation-linked trust graphs that compound over time, enabling faster execution,
              reduced collateral requirements, and preferential access to high-value exchanges across the network.
            </p>
          </div>
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <Star className="w-7 h-7 text-cyan-400" />
            <h2 className="text-xl font-bold text-white">Merit-Based Recognition</h2>
            <p className="text-slate-400 leading-relaxed">
              Performance, delivery quality, and economic contribution are converted into reputation tiers,
              execution badges, and governance privileges — replacing social status with provable value creation.
            </p>
          </div>
        </section>

        {/* Three Arms of Citizenship */}
        <section className="space-y-6">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white">
            The Three Pillars of{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Citizenship
            </span>
          </h2>
          <CitizenshipFlowDiagram />
        </section>

        {/* Rights & Guarantees */}
        <section className="grid md:grid-cols-3 gap-10">
          <div className="glass-panel p-8 rounded-[2rem] border border-white/10 space-y-4">
            <ShieldCheck className="w-7 h-7 text-cyan-400" />
            <h3 className="text-lg font-bold text-white">Execution Rights</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Citizenship unlocks protocol-level permissions — including contract initiation, high-value exchange
              participation, governance voting, and dispute arbitration eligibility based on reputation class.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-[2rem] border border-white/10 space-y-4">
            <Globe className="w-7 h-7 text-purple-400" />
            <h3 className="text-lg font-bold text-white">Global Economic Identity</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Each citizen holds a portable, verifiable economic identity usable across Barterverse sectors —
              education, security, logistics, innovation, emergency response, and enterprise coordination layers.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-[2rem] border border-white/10 space-y-4">
            <UserCheck className="w-7 h-7 text-cyan-400" />
            <h3 className="text-lg font-bold text-white">Reputation Sovereignty</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Reputation belongs to the citizen — not the platform. It is transparently auditable, portable,
              and mathematically derived from execution history, counterparty feedback, and verified delivery outcomes.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CitizenshipPage;
