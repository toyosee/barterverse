import React from "react";
import { UserCheck, HeartHandshake, Star } from "lucide-react";
import CitizenshipFlowDiagram from "../components/CitizenshipFlowDiagram";

const CitizenshipPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 mt-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-cyan-500/10 blur-[140px] rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Hero */}
        <header className="text-center">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-black text-[10px] uppercase tracking-[0.4em] mb-6">
            <UserCheck className="w-5 h-5" />
            Citizenship
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-grotesk tracking-tight">
            Belonging in{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Barterverse
            </span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
            Citizenship is more than membership — it’s identity, rights, and responsibilities in the Barterverse.
          </p>
        </header>

        {/* Community Bonds + Recognition */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <HeartHandshake className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-bold text-white">Community Bonds</h2>
            <p className="text-slate-400">
              Citizens form trust networks, ensuring exchanges are not just transactional but relational.
            </p>
          </div>
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <Star className="w-6 h-6 text-cyan-400" />
            <h2 className="text-xl font-bold text-white">Recognition</h2>
            <p className="text-slate-400">
              Citizenship comes with recognition badges that highlight contributions and foster reputation.
            </p>
          </div>
        </section>

        {/* Three Arms of Citizenship */}
        <section className="space-y-6">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white">
            The Three Arms of <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Citizenship</span>
          </h2>
          <CitizenshipFlowDiagram />
        </section>
      </div>
    </main>
  );
};

export default CitizenshipPage;