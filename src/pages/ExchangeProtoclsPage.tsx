import React from "react";
import { ArrowRightLeft, Workflow, Scale, Users } from "lucide-react";

const ExchangeProtocolsPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 mt-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/3 w-[450px] h-[450px] bg-purple-500/10 blur-[140px] rounded-full animate-float-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Hero */}
        <header className="text-center">
          <div className="inline-flex items-center gap-2 text-purple-400 font-black text-[10px] uppercase tracking-[0.4em] mb-6">
            <ArrowRightLeft className="w-5 h-5" />
            Exchange Protocols
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-grotesk tracking-tight">
            Protocols of{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Economic Flow
            </span>
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
            Exchange Protocols are the core operating system of Barterverse — governing how value is priced, routed,
            executed, settled, and reputationally recorded across the ecosystem. They replace informal trust with
            programmable economic coordination.
          </p>
        </header>

        {/* Protocol Layers */}
        <section className="grid md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <Workflow className="w-6 h-6 text-cyan-400" />
            <h2 className="text-xl font-bold text-white">Execution Pipelines</h2>
            <p className="text-slate-400">
              Every exchange follows a deterministic pipeline — discovery → proposal → valuation → execution →
              settlement → reputation minting — ensuring contractual clarity, dispute minimization, and operational
              scalability.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <Scale className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-bold text-white">Value Symmetry Engine</h2>
            <p className="text-slate-400">
              Protocols embed economic parity through Barter Credit (BC) pricing models, Value Match Index (VMI),
              contribution weighting, and execution risk scoring — ensuring exchanges remain balanced, fair, and
              incentive-aligned.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <Users className="w-6 h-6 text-cyan-400" />
            <h2 className="text-xl font-bold text-white">Decentralized Governance Layer</h2>
            <p className="text-slate-400">
              Exchange rules evolve through citizen governance, reputation-weighted voting, arbitration councils,
              and protocol amendment frameworks — enabling continuous adaptation without centralized control.
            </p>
          </div>
        </section>

        {/* Community Scope */}
        <section className="glass-panel p-8 md:p-12 rounded-[2rem] border border-white/10">
          <h2 className="text-xl font-bold text-white mb-6">Protocol Scope & Economic Guarantees</h2>
          <p className="text-slate-400 leading-relaxed">
            Exchange Protocols are not static policies — they are living economic contracts. They define execution
            guarantees, settlement finality, reputation issuance, dispute resolution paths, and value symmetry
            enforcement across every Barterverse sector. As new industries, technologies, and markets emerge,
            these protocols evolve — ensuring the ecosystem remains scalable, sovereign, and future-proof.
          </p>
        </section>
      </div>
    </main>
  );
};

export default ExchangeProtocolsPage;
