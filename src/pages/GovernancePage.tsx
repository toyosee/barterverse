import React from "react";
import { Gavel, Scale, Users, ShieldCheck, Eye, Workflow } from "lucide-react";

const GovernancePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 mt-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[520px] h-[520px] bg-purple-500/10 blur-[160px] rounded-full animate-float-slow"></div>
        <div className="absolute bottom-1/3 left-1/5 w-[420px] h-[420px] bg-cyan-500/10 blur-[140px] rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Hero */}
        <header className="text-center">
          <div className="inline-flex items-center gap-2 text-purple-400 font-black text-[10px] uppercase tracking-[0.4em] mb-6">
            <Gavel className="w-5 h-5" />
            Governance Layer
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-grotesk tracking-tight">
            Constitutional{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Coordination
            </span>
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
            Governance in Barterverse is not moderation — it is economic infrastructure. It defines how value systems
            evolve, how disputes resolve, how capital flows remain fair, and how sovereignty transitions from founding
            teams to citizens through progressive decentralization.
          </p>
        </header>

        {/* Principles row */}
        <section className="grid md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <Scale className="w-6 h-6 text-cyan-400" />
            <h2 className="text-xl font-bold text-white">Economic Fairness</h2>
            <p className="text-slate-400">
              All exchanges are evaluated using deterministic metrics — Barter Credit (BC) valuation curves, Value Match
              Index (VMI), risk-weighting, and execution reliability — ensuring structural symmetry across all actors and
              domains.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <Eye className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-bold text-white">Protocol Transparency</h2>
            <p className="text-slate-400">
              Governance artifacts — proposals, votes, simulations, arbitrations, and outcomes — are immutably logged
              and queryable, enabling system-wide auditability, trust minimization, and institutional memory.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <ShieldCheck className="w-6 h-6 text-cyan-400" />
            <h2 className="text-xl font-bold text-white">Accountable Sovereignty</h2>
            <p className="text-slate-400">
              Authority is reputation-weighted, revocable, and bounded by protocol. Enforcement emphasizes restoration,
              collateral alignment, and system resilience over punitive exclusion.
            </p>
          </div>
        </section>

        {/* Decision models */}
        <section className="glass-panel p-8 md:p-12 rounded-[2rem] border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-bold text-white">Decision Architectures</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-2">Consent Thresholding</h3>
              <p className="text-slate-400">
                Low-risk protocol optimizations advance when no qualified objections exist — enabling rapid iteration
                without governance congestion.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Quadratic Reputation Voting</h3>
              <p className="text-slate-400">
                Voting power scales with contribution reputation and BC stake, preventing capital dominance while
                preserving signal intensity on high-impact decisions.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Deliberative Arbitration Councils</h3>
              <p className="text-slate-400">
                Rotating, cross-sector councils resolve complex disputes, constitutional amendments, and systemic
                failures — publishing binding outcomes with full rationale.
              </p>
            </div>
          </div>
        </section>

        {/* Processes timeline */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Workflow className="w-6 h-6 text-cyan-400" />
              <h2 className="text-xl font-bold text-white">Governance Execution Pipeline</h2>
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-slate-500 uppercase text-[10px] font-black tracking-[0.3em] mb-1">
                  Proposal Encoding
                </div>
                <p className="text-slate-400">
                  Citizens submit machine-readable proposals including scope, BC impact, system risks, economic
                  externalities, and measurable outcome KPIs.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-slate-500 uppercase text-[10px] font-black tracking-[0.3em] mb-1">
                  Simulation & Review
                </div>
                <p className="text-slate-400">
                  The Economic Engine runs forward simulations to stress-test outcomes across liquidity, reputation,
                  and sector dynamics — flagging instability or incentive misalignment.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-slate-500 uppercase text-[10px] font-black tracking-[0.3em] mb-1">
                  Decision Resolution
                </div>
                <p className="text-slate-400">
                  Governance tier (consent, quadratic vote, council arbitration) is automatically selected based on
                  proposal risk-weight and systemic impact radius.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-slate-500 uppercase text-[10px] font-black tracking-[0.3em] mb-1">
                  Protocol Enforcement
                </div>
                <p className="text-slate-400">
                  Approved changes are compiled into executable rules, smart contracts, or policy modules — deployed
                  with observability, rollback mechanisms, and continuous monitoring.
                </p>
              </div>
            </div>
          </div>

          {/* Safeguards */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-purple-400" />
              <h2 className="text-xl font-bold text-white">Safeguards & Constitutional Defense</h2>
            </div>
            <ul className="space-y-4">
              <li className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-white font-semibold">Multi-Stage Dispute Resolution</span>
                <p className="text-slate-400 mt-2">
                  Conflicts route through mediation → arbitration councils → constitutional review, prioritizing
                  restitution, incentive realignment, and systemic stability over punitive exclusion.
                </p>
              </li>
              <li className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-white font-semibold">Graduated Sanctions Framework</span>
                <p className="text-slate-400 mt-2">
                  Enforcement scales from warnings → BC staking requirements → execution restrictions → governance
                  suspension — always preserving a remediation path back to full citizenship.
                </p>
              </li>
              <li className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-white font-semibold">Immutable Governance Ledger</span>
                <p className="text-slate-400 mt-2">
                  All governance actions, votes, rulings, and policy transitions are cryptographically logged, enabling
                  transparent audits and long-term institutional memory.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Role responsibilities */}
        <section className="glass-panel p-8 md:p-12 rounded-[2rem] border border-white/10">
          <h2 className="text-xl font-bold text-white mb-6">Constitutional Roles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Initiators</h3>
              <p className="text-slate-400">
                Encode economic intent, define value hypotheses, stake BC credibility, and steward proposal execution
                through transparent milestone reporting.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Executors</h3>
              <p className="text-slate-400">
                Deliver execution against protocol guarantees, surface systemic risks early, and preserve verifiable
                documentation for settlement, arbitration, and auditability.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Connectors</h3>
              <p className="text-slate-400">
                Route liquidity, optimize value symmetry, monitor reputation gradients, and flag macro-instability
                across domains and networks.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <a
            href="/barterverse_governance_handbook.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-2xl font-black text-sm tracking-[0.2em] uppercase hover:scale-[1.02] transition-all"
          >
            View Governance Constitution
          </a>
        </section>
      </div>
    </main>
  );
};

export default GovernancePage;
