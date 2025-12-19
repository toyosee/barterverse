import React from "react";
import { Shield, Eye, Lock, UserCheck } from "lucide-react";

const PrivacySystemPage: React.FC = () => {
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
            <Shield className="w-5 h-5" />
            Privacy System
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-grotesk tracking-tight">
            Trust and <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Protection</span>
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
            Privacy in Barterverse is community‑driven. It safeguards identity, ensures secure exchanges, and balances transparency with confidentiality.
          </p>
        </header>

        {/* Core Principles */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <Lock className="w-6 h-6 text-cyan-400" />
            <h2 className="text-xl font-bold text-white">Data Protection</h2>
            <p className="text-slate-400">
              All personal and exchange data is encrypted. Community members control what is shared and what remains private.
            </p>
          </div>
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <Eye className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-bold text-white">Selective Transparency</h2>
            <p className="text-slate-400">
              Exchange outcomes are visible for accountability, but sensitive details remain confidential to protect participants.
            </p>
          </div>
        </section>

        {/* Community Scope */}
        <section className="glass-panel p-8 md:p-12 rounded-[2rem] border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <UserCheck className="w-6 h-6 text-cyan-400" />
            <h2 className="text-xl font-bold text-white">Community Scope</h2>
          </div>
          <p className="text-slate-400">
            Privacy is not just technical — it’s cultural. Citizens are empowered to set boundaries, report breaches, and co‑create policies that protect trust. The system evolves with community feedback, ensuring relevance and resilience.
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacySystemPage;