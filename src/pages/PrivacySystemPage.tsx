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
            Sovereign <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Trust Architecture</span>
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
            The Barterverse Privacy System is a cryptographic trust layer that enables secure collaboration, compliant
            exchange, and identity sovereignty — without sacrificing transparency, accountability, or network
            coordination.
          </p>
        </header>

        {/* Core Architecture */}
        <section className="grid md:grid-cols-3 gap-10">
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <Lock className="w-6 h-6 text-cyan-400" />
            <h2 className="text-xl font-bold text-white">End-to-End Encryption</h2>
            <p className="text-slate-400">
              All identity credentials, communications, and exchange artifacts are encrypted at rest and in transit
              using zero-trust primitives and forward-secure key management. Only authorized counterparties can access
              sensitive data.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <Eye className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-bold text-white">Selective Disclosure</h2>
            <p className="text-slate-400">
              Users control data exposure through cryptographic proofs and access policies — revealing only what is
              required for trust, compliance, or exchange execution, while preserving personal and commercial
              confidentiality.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <Shield className="w-6 h-6 text-cyan-400" />
            <h2 className="text-xl font-bold text-white">Verifiable Trust Signals</h2>
            <p className="text-slate-400">
              Reputation scores, credential attestations, and transaction integrity proofs are published as
              cryptographically verifiable trust artifacts — enabling accountability without exposing private
              identities or proprietary data.
            </p>
          </div>
        </section>

        {/* Governance & Community Layer */}
        <section className="glass-panel p-8 md:p-12 rounded-[2rem] border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <UserCheck className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-bold text-white">Community-Governed Privacy</h2>
          </div>
          <p className="text-slate-400 leading-relaxed">
            Privacy in Barterverse is enforced not only through cryptography but through protocol governance. Citizens
            co-define access policies, escalation paths, and breach remediation standards. The system evolves through
            transparent audits, continuous threat modeling, and community-driven upgrades — ensuring long-term trust,
            regulatory adaptability, and institutional resilience.
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacySystemPage;
