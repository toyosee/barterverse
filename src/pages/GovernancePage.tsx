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
            Governance
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-grotesk tracking-tight">
            Collective <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Decision‑Making</span>
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
            Governance in Barterverse protects fairness, guides coordination, and ensures accountability across
            exchanges. It’s lightweight, transparent, and community‑first.
          </p>
        </header>

        {/* Principles row */}
        <section className="grid md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <Scale className="w-6 h-6 text-cyan-400" />
            <h2 className="text-xl font-bold text-white">Fairness</h2>
            <p className="text-slate-400">
              Every exchange is evaluated by clear criteria: value weight (VMI), impact, and risk balance. Rules apply
              equally to Initiators, Executors, and Connectors.
            </p>
          </div>
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <Eye className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-bold text-white">Transparency</h2>
            <p className="text-slate-400">
              Decisions, parameters, and outcomes are visible by default. Governance artifacts (policies, votes,
              appeals) are logged and auditable.
            </p>
          </div>
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <ShieldCheck className="w-6 h-6 text-cyan-400" />
            <h2 className="text-xl font-bold text-white">Accountability</h2>
            <p className="text-slate-400">
              Roles carry responsibilities. Breaches trigger fair processes—warnings, mediation, and corrective
              actions—prioritizing restoration over punishment.
            </p>
          </div>
        </section>

        {/* Decision models */}
        <section className="glass-panel p-8 md:p-12 rounded-[2rem] border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-bold text-white">Decision Models</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-2">Consent‑based</h3>
              <p className="text-slate-400">
                Move forward when no one has a reasoned objection. Used for low‑risk protocol tweaks and routine policy
                updates.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Quadratic voting</h3>
              <p className="text-slate-400">
                Give voice to intensity of preference, not just majority. Ideal for prioritizing roadmap items and
                budget allocations.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Deliberative councils</h3>
              <p className="text-slate-400">
                Rotating, diverse panels synthesize community input for complex or cross‑sector matters, then publish
                rationale and recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* Processes timeline */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Workflow className="w-6 h-6 text-cyan-400" />
              <h2 className="text-xl font-bold text-white">Operational Processes</h2>
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-slate-500 uppercase text-[10px] font-black tracking-[0.3em] mb-1">Proposal</div>
                <p className="text-slate-400">
                  Anyone can submit a clear proposal: objective, scope, expected impact, and KPIs. Templates ensure
                  consistency and comparability.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-slate-500 uppercase text-[10px] font-black tracking-[0.3em] mb-1">Review</div>
                <p className="text-slate-400">
                  Community review with open commentary. The Vortex Engine may simulate outcomes and flag risks or
                  misalignments.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-slate-500 uppercase text-[10px] font-black tracking-[0.3em] mb-1">Decision</div>
                <p className="text-slate-400">
                  Appropriate decision model is chosen based on risk/impact tier. Outcomes are recorded with a short
                  rationale.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-slate-500 uppercase text-[10px] font-black tracking-[0.3em] mb-1">Execution</div>
                <p className="text-slate-400">
                  Named owners, milestones, and review cadences. Dashboards show progress and deviations from plan.
                </p>
              </div>
            </div>
          </div>

          {/* Safeguards */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-purple-400" />
              <h2 className="text-xl font-bold text-white">Safeguards & Appeals</h2>
            </div>
            <ul className="space-y-4">
              <li className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-white font-semibold">Conflict resolution</span>
                <p className="text-slate-400 mt-2">
                  Start with mediation. If unresolved, escalate to a council. Outcomes focus on restitution, not blame.
                </p>
              </li>
              <li className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-white font-semibold">Sanctions</span>
                <p className="text-slate-400 mt-2">
                  Graduated responses: advisory notes → temporary limits → removal from sensitive roles, always with a
                  path back via remediation.
                </p>
              </li>
              <li className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-white font-semibold">Transparency log</span>
                <p className="text-slate-400 mt-2">
                  Decisions, votes, and appeals are logged with timestamps, rationale, and links to artifacts for
                  community audit.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Role responsibilities */}
        <section className="glass-panel p-8 md:p-12 rounded-[2rem] border border-white/10">
          <h2 className="text-xl font-bold text-white mb-6">Role Responsibilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Initiators</h3>
              <p className="text-slate-400">
                Define clear goals and value hypotheses. Engage openly during review, adapt proposals to feedback, and
                report execution transparently.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Executors</h3>
              <p className="text-slate-400">
                Deliver milestones, raise blockers early, and steward quality. Maintain documentation for continuity and
                audit.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Connectors</h3>
              <p className="text-slate-400">
                Broker fair exchanges, monitor VMI/impact, and flag systemic risks. Facilitate bridges across nodes and
                domains.
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
              View Governance Handbook
            </a>
          </section>
      </div>
    </main>
  );
};

export default GovernancePage;