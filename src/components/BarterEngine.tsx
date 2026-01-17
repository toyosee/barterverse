import React, { useState } from 'react';
import {
  Loader2,
  ArrowRightLeft,
  ShieldCheck,
  Timer,
  TrendingUp,
  Zap,
  Target,
  Search,
  Layers,
  BadgeInfo,
  Sparkles,
  AlertTriangle,
  Scale,
  Coins,
  Link2,
  Network,
  Gavel,
  Shield,
  Star,
} from 'lucide-react';
import { getBarterAdvice } from '../services/geminiService';
import type { BarterMatchResult } from '../../types';

// ============================
// Protocol Interpretation Layer
// ============================

const interpretImpactScore = (value?: number): string => {
  if (value === undefined || value === null) return 'Unknown Impact';
  if (value >= 90) return 'Transformational Impact';
  if (value >= 75) return 'High Network Impact';
  if (value >= 55) return 'Moderate Economic Impact';
  if (value >= 35) return 'Localized Impact';
  return 'Minimal Impact';
};

const interpretVMI = (ratio?: number): string => {
  if (ratio === undefined || ratio === null) return 'N/A';
  if (ratio >= 0.9) return 'Protocol-Perfect Alignment';
  if (ratio >= 0.75) return 'Strong Value Convergence';
  if (ratio >= 0.6) return 'Viable Alignment';
  if (ratio >= 0.45) return 'Weak Convergence';
  return 'Non-Optimal Alignment';
};

const interpretTrustTier = (tier?: string) => {
  switch (tier) {
    case 'T3':
      return { label: 'Sovereign Trust', color: 'text-cyan-400' };
    case 'T2':
      return { label: 'High Trust', color: 'text-purple-400' };
    case 'T1':
      return { label: 'Moderate Trust', color: 'text-yellow-400' };
    case 'T0':
      return { label: 'Zero Trust', color: 'text-pink-400' };
    default:
      return { label: 'Unknown', color: 'text-slate-400' };
  }
};

const BarterEngine: React.FC = () => {
  const [have, setHave] = useState('');
  const [want, setWant] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<BarterMatchResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleConsult = async () => {
    if (!have || !want) {
      setErrorMsg('Both value inputs are required to compute an exchange topology.');
      return;
    }
    setErrorMsg(null);
    setLoading(true);
    try {
      const advice = await getBarterAdvice(have, want);
      setResult(advice);
    } catch (error) {
      console.error(error);
      setErrorMsg('Exchange engine synchronization failed. Please retry.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="barter-engine" className="py-16 sm:py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="relative group">
          {/* Glow frame */}
          <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 rounded-[2.5rem] sm:rounded-[4rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>

          <div className="relative glass-panel rounded-[2rem] sm:rounded-[3.5rem] p-6 sm:p-10 md:p-16 overflow-hidden border border-white/10">
            {/* Matrix scanline */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
              <div className="scanline" />
            </div>

            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-cyan-500/10 flex items-center justify-center mb-6 sm:mb-8 border border-cyan-500/20">
                  <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" />
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white font-grotesk tracking-tighter mb-4 sm:mb-6 uppercase">
                  Vortex{' '}
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Exchange Engine
                  </span>
                </h2>
                <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-cyan-400 to-purple-600 mb-6 sm:mb-8"></div>
                <p className="text-slate-400 text-base sm:text-lg md:text-xl font-light max-w-2xl leading-relaxed px-2">
                  The execution intelligence core of Barterverse. Vortex evaluates human capability, trust posture,
                  settlement feasibility, reputation economics, and ecosystem impact to generate protocol-grade,
                  moneyless exchange blueprints.
                </p>
              </div>

              {/* Input grid */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto,1fr] items-center gap-6 sm:gap-8 mb-8">
                {/* Skill to offer */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3 px-1">
                    <Search className="w-4 h-4 text-cyan-400" />
                    <label className="text-[10px] sm:text-[11px] font-black text-slate-500 uppercase tracking-[0.3em]">
                      Value Contribution (Input Asset)
                    </label>
                  </div>
                  <input
                    type="text"
                    value={have}
                    onChange={(e) => setHave(e.target.value)}
                    placeholder="e.g., Distributed Systems Architecture"
                    className="w-full bg-slate-950/80 border border-white/10 rounded-2xl sm:rounded-3xl px-5 sm:px-8 py-4 sm:py-6 text-white placeholder:text-slate-700 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all text-base sm:text-lg md:text-xl font-medium"
                  />
                </div>

                {/* Arrow */}
                <div className="flex justify-center order-[-1] lg:order-none">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all hover:scale-110">
                    <ArrowRightLeft className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                </div>

                {/* Skill to acquire */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3 px-1">
                    <Target className="w-4 h-4 text-purple-400" />
                    <label className="text-[10px] sm:text-[11px] font-black text-slate-500 uppercase tracking-[0.3em]">
                      Value Objective (Output Asset)
                    </label>
                  </div>
                  <input
                    type="text"
                    value={want}
                    onChange={(e) => setWant(e.target.value)}
                    placeholder="e.g., AI Risk Governance Advisory"
                    className="w-full bg-slate-950/80 border border-white/10 rounded-2xl sm:rounded-3xl px-5 sm:px-8 py-4 sm:py-6 text-white placeholder:text-slate-700 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all text-base sm:text-lg md:text-xl font-medium"
                  />
                </div>
              </div>

              {/* Inline error */}
              {errorMsg && (
                <div className="mb-8 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-pink-500/10 border border-pink-500/30 text-pink-300 text-sm">
                  {errorMsg}
                </div>
              )}

              {/* Consult button */}
              <button
                onClick={handleConsult}
                disabled={loading || !have || !want}
                className={`group relative w-full py-5 sm:py-7 rounded-[1.5rem] sm:rounded-[2rem] font-black text-lg sm:text-xl md:text-2xl tracking-[0.2em] uppercase transition-all shadow-2xl overflow-hidden ${
                  loading
                    ? 'bg-slate-900 text-slate-700 cursor-not-allowed'
                    : 'bg-gradient-to-r from-cyan-400 to-purple-600 text-white hover:scale-[1.02]'
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-3 sm:gap-4">
                    <Loader2 className="animate-spin w-6 h-6 sm:w-8 sm:h-8" />
                    Computing Exchange Topology...
                  </span>
                ) : (
                  <span className="relative z-10">Compute Value Exchange</span>
                )}
              </button>

              {/* Result */}
              {result && (
                <div className="mt-12 sm:mt-16 md:mt-20 p-6 sm:p-8 md:p-12 rounded-[1.5rem] sm:rounded-[3rem] bg-slate-950/80 border border-white/10 animate-in fade-in slide-in-from-bottom-10 duration-700">
                  {/* Header row */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 sm:mb-12 gap-6 sm:gap-8">
                    {/* Left block */}
                    <div>
                      <div className="text-[10px] sm:text-[11px] font-black text-cyan-400 uppercase tracking-[0.3em] mb-2">
                        Exchange Intelligence
                      </div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-grotesk tracking-tight uppercase">
                        Protocol: Trust-Aware Skill Settlement
                      </h3>
                    </div>

                    {/* KPI pills */}
                    <div className="flex flex-wrap items-center gap-3">
                      {/* Value tier */}
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/5 border border-cyan-500/20">
                        <Coins className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-cyan-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-wider">
                          Tier: {result.estimatedValue?.tier ?? 'N/A'}
                        </span>
                      </div>

                      {/* Value match index */}
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/5 border border-purple-500/20">
                        <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
                        <span className="text-purple-300 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-wider">
                          VMI: {interpretVMI(result.valueMatchIndex?.ratio)}
                        </span>
                      </div>

                      {/* Impact Score */}
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/5 border border-pink-500/20">
                        <TrendingUp className="w-4 h-4 text-pink-400" />
                        <span className="text-pink-300 text-xs font-black uppercase tracking-wider">
                          {interpretImpactScore(result.impactScore?.value)}
                        </span>
                      </div>

                      {/* Trust Tier */}
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                        <Shield className="w-4 h-4 text-cyan-300" />
                        <span
                          className={`text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-wider ${
                            interpretTrustTier(result.trustTier).color
                          }`}
                        >
                          Trust: {interpretTrustTier(result.trustTier).label}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Strategy */}
                  <p className="text-slate-300 text-lg sm:text-xl md:text-2xl leading-relaxed mb-10 sm:mb-12 md:mb-16 font-light italic">
                    "{result.exchangeStrategy ?? 'No strategy returned'}"
                  </p>

                  {/* Meta badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
                    {result.skillDomain && (
                      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                        <Layers className="w-5 h-5 text-cyan-400" />
                        <div className="text-slate-300 text-sm">
                          <span className="text-slate-500 uppercase tracking-[0.2em] text-[10px] font-black block mb-1">
                            Skill Domain
                          </span>
                          {result.skillDomain}
                        </div>
                      </div>
                    )}
                    {result.competencyAlignment && (
                      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                        <BadgeInfo className="w-5 h-5 text-purple-400" />
                        <div className="text-slate-300 text-sm">
                          <span className="text-slate-500 uppercase tracking-[0.2em] text-[10px] font-black block mb-1">
                            Competency Alignment
                          </span>
                          {result.competencyAlignment}
                        </div>
                      </div>
                    )}
                    {result.executionMode && (
                      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                        <Network className="w-5 h-5 text-purple-300" />
                        <div className="text-slate-300 text-sm">
                          <span className="text-slate-500 uppercase tracking-[0.2em] text-[10px] font-black block mb-1">
                            Execution Mode
                          </span>
                          {result.executionMode}
                        </div>
                      </div>
                    )}
                    {result.settlementMode && (
                      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                        <ShieldCheck className="w-5 h-5 text-cyan-300" />
                        <div className="text-slate-300 text-sm">
                          <span className="text-slate-500 uppercase tracking-[0.2em] text-[10px] font-black block mb-1">
                            Settlement Mode
                          </span>
                          {result.settlementMode}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
                    {/* Settlement Pathways */}
                    <div className="space-y-6 sm:space-y-8 md:space-y-10">
                      <h4 className="text-white font-black text-[10px] sm:text-xs uppercase tracking-[0.4em] flex items-center gap-3 sm:gap-4">
                        <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
                        Settlement Pathway
                      </h4>
                      <div className="space-y-4 sm:space-y-6">
                        {(result.settlementPathways ?? []).map((path, idx) => (
                          <div
                            key={idx}
                            className="flex gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group/item"
                          >
                            <span className="text-cyan-500 font-bold font-grotesk text-lg sm:text-xl opacity-40 group-hover/item:opacity-100 transition-opacity">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{path}</p>
                          </div>
                        ))}
                        {(!result.settlementPathways || result.settlementPathways.length === 0) && (
                          <div className="p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/5 text-slate-400">
                            No settlement steps provided.
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right column */}
                    <div className="space-y-6 sm:space-y-8 md:space-y-12">
                      {/* Duration */}
                      <div className="p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] bg-cyan-500/5 border border-cyan-500/10 space-y-4 sm:space-y-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-10">
                          <Timer className="w-24 h-24 sm:w-32 sm:h-32" />
                        </div>
                        <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-4 relative z-10">
                          <Timer className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                          <h4 className="text-white font-black text-[10px] sm:text-xs uppercase tracking-widest">
                            Exchange Timeframe
                          </h4>
                        </div>
                        <p className="text-slate-400 text-sm sm:text-lg leading-relaxed font-light relative z-10">
                          {result.recommendedDuration ?? 'No timeframe provided'}
                        </p>
                      </div>

                      {/* Trust + leverage */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {result.trustTier && (
                          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                            <Shield className="w-5 h-5 text-cyan-400" />
                            <div>
                              <span className="block text-slate-500 uppercase tracking-[0.2em] text-[10px] font-black mb-1">
                                Trust Tier
                              </span>
                              <span className="text-slate-300 text-sm font-semibold">
                                {interpretTrustTier(result.trustTier).label}
                              </span>
                            </div>
                          </div>
                        )}
                        {result.ecosystemLeverage && (
                          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                            <TrendingUp className="w-5 h-5 text-purple-400" />
                            <div>
                              <span className="block text-slate-500 uppercase tracking-[0.2em] text-[10px] font-black mb-1">
                                Ecosystem Leverage
                              </span>
                              <span className="text-slate-300 text-sm font-semibold">
                                {result.ecosystemLeverage}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Settlement Mode + Arbitration */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {result.settlementMode && (
                          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                            <ShieldCheck className="w-5 h-5 text-cyan-300" />
                            <div>
                              <span className="block text-slate-500 uppercase tracking-[0.2em] text-[10px] font-black mb-1">
                                Settlement Mode
                              </span>
                              <span className="text-slate-300 text-sm font-semibold">
                                {result.settlementMode}
                              </span>
                            </div>
                          </div>
                        )}
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                          <Gavel className="w-5 h-5 text-pink-400" />
                          <div>
                            <span className="block text-slate-500 uppercase tracking-[0.2em] text-[10px] font-black mb-1">
                              Arbitration
                            </span>
                            <span className="text-slate-300 text-sm font-semibold">
                              {result.arbitrationRequired ? 'Required' : 'Not Required'}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Reputation Economics */}
                      {result.reputationDelta && (
                        <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                          <div className="flex items-center gap-3">
                            <Star className="w-5 h-5 text-cyan-400" />
                            <h5 className="text-white font-black text-[10px] sm:text-xs uppercase tracking-[0.25em]">
                              Reputation Economics
                            </h5>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="p-3 rounded-xl bg-slate-900/60 border border-white/10">
                              <span className="block text-slate-500 uppercase tracking-[0.2em] text-[10px] font-black mb-1">
                                Provider Gain
                              </span>
                              <span className="text-cyan-300 font-semibold">
                                +{result.reputationDelta.providerGain}
                              </span>
                            </div>
                            <div className="p-3 rounded-xl bg-slate-900/60 border border-white/10">
                              <span className="block text-slate-500 uppercase tracking-[0.2em] text-[10px] font-black mb-1">
                                Requester Gain
                              </span>
                              <span className="text-purple-300 font-semibold">
                                +{result.reputationDelta.requesterGain}
                              </span>
                            </div>
                            {result.reputationDelta.decayRisk !== undefined && result.reputationDelta.decayRisk !== null && (
                              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/10">
                                <span className="block text-slate-500 uppercase tracking-[0.2em] text-[10px] font-black mb-1">
                                  Decay Risk
                                </span>
                                <span className="text-pink-300 font-semibold">
                                  {result.reputationDelta.decayRisk}%
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Complementary skills */}
                      {result.complementarySkills && result.complementarySkills.length > 0 && (
                        <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10">
                          <div className="flex items-center gap-3 mb-4">
                            <Sparkles className="w-5 h-5 text-cyan-400" />
                            <h5 className="text-white font-black text-[10px] sm:text-xs uppercase tracking-[0.25em]">
                              Value Amplifiers
                            </h5>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {result.complementarySkills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1 rounded-full bg-slate-800/40 text-[10px] text-cyan-300 font-bold uppercase tracking-[0.15em] border border-cyan-500/20"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Risks */}
                      {result.riskProfile && result.riskProfile.length > 0 && (
                        <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                          <div className="flex items-center gap-3">
                            <AlertTriangle className="w-5 h-5 text-pink-400" />
                            <h5 className="text-white font-black text-[10px] sm:text-xs uppercase tracking-[0.25em]">
                              Protocol Risks
                            </h5>
                          </div>
                          <ul className="space-y-3">
                            {result.riskProfile.map((risk, idx) => (
                              <li
                                key={idx}
                                className="p-3 rounded-xl bg-slate-900/60 border border-white/10"
                              >
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-slate-300 text-sm font-semibold">
                                    {risk.risk}
                                  </span>
                                  <span
                                    className={`text-[10px] font-black uppercase tracking-widest ${
                                      risk.severity === 'High'
                                        ? 'text-pink-400'
                                        : risk.severity === 'Medium'
                                        ? 'text-yellow-400'
                                        : 'text-cyan-400'
                                    }`}
                                  >
                                    {risk.severity}
                                  </span>
                                </div>
                                <p className="text-slate-500 text-xs leading-relaxed">
                                  Mitigation: {risk.mitigation}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Action */}
                      <button className="w-full py-4 sm:py-5 md:py-6 bg-gradient-to-r from-cyan-600 to-purple-700 text-white rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm tracking-[0.2em] uppercase hover:scale-[1.02] transition-all shadow-xl shadow-cyan-900/20 flex items-center justify-center gap-3">
                        <Link2 className="w-4 h-4" />
                        Initiate Trustless Settlement
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BarterEngine;
