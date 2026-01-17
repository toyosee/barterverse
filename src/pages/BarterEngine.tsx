import React from "react";
import { Cpu, Users, Workflow, ShieldCheck, Brain, Network } from "lucide-react";
import MatchingFlowDiagram from "../components/MatchingFlowDiagram";

const InternalBarteringEnginePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 mt-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full animate-float-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-20">
        {/* Hero */}
        <header className="text-center">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-black text-[10px] uppercase tracking-[0.4em] mb-6">
            <Cpu className="w-5 h-5" />
            Internal Bartering Engine
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-grotesk tracking-tight">
            The <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Execution Core</span> of the Barterverse Economy
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
            The Internal Bartering Engine (IBE) is Barterverse’s intelligent coordination layer — an AI-powered,
            reputation-aware execution protocol that transforms intent into verified outcomes. It replaces
            trust-based matching with cryptographic credibility, performance scoring, and programmable value settlement
            using Barter Credits (BC).
          </p>
        </header>

        {/* Core Features */}
        <section className="grid md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="glass-panel p-8 rounded-[2rem] border border-white/10 hover:border-cyan-400/30 transition-all">
            <ShieldCheck className="w-10 h-10 text-cyan-400 mb-5" />
            <h3 className="text-lg font-bold text-white mb-3">Trustless Credential Verification</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Skills, certifications, execution history, and peer attestations are continuously validated through
              cryptographic proofs and reputation scoring — eliminating impersonation, low-quality delivery, and
              asymmetric trust.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="glass-panel p-8 rounded-[2rem] border border-white/10 hover:border-purple-400/30 transition-all">
            <Brain className="w-10 h-10 text-purple-400 mb-5" />
            <h3 className="text-lg font-bold text-white mb-3">AI-Orchestrated Matching</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Multi-agent intelligence models evaluate intent vectors, task complexity, execution risk, and domain
              expertise to construct optimal execution paths — not just matches — across Initiators, Executors,
              and Connectors.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="glass-panel p-8 rounded-[2rem] border border-white/10 hover:border-cyan-400/30 transition-all">
            <Network className="w-10 h-10 text-cyan-400 mb-5" />
            <h3 className="text-lg font-bold text-white mb-3">Programmable Value Settlement</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Barter Credits (BC) are locked into execution contracts and released only upon verified completion,
              milestone validation, or arbitration resolution — enabling trust-minimized coordination without
              financial intermediaries.
            </p>
          </div>
        </section>

        {/* Matching Process */}
        <section className="glass-panel p-8 md:p-12 rounded-[2rem] border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <Workflow className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-bold text-white">Execution & Matching Flow</h2>
          </div>
          <p className="text-slate-400 mb-8 leading-relaxed">
            The Internal Bartering Engine follows a deterministic execution pipeline — transforming intent into
            validated outcomes through identity verification, AI orchestration, contract formation, performance
            monitoring, and cryptographic settlement.
          </p>
          <MatchingFlowDiagram />
        </section>

        {/* Community Impact */}
        <section className="text-center space-y-6">
          <Users className="w-9 h-9 text-cyan-400 mx-auto" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Network <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Effects</span> at Scale
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            By replacing trust-based marketplaces with execution-grade coordination infrastructure, the Internal
            Bartering Engine compounds reputation, eliminates counterparty risk, increases delivery velocity, and
            enables Barterverse to scale from peer-to-peer exchange into planetary production networks.
          </p>
        </section>
      </div>
    </main>
  );
};

export default InternalBarteringEnginePage;
