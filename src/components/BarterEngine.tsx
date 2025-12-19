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
} from 'lucide-react';
import { getBarterAdvice } from '../services/geminiService';
import type { BarterMatchResult } from '../../types';


// Helper functions to interpret KPIs
// Helper function to interpret impact score
const interpretImpactScore = (score: string): string => {
  const num = parseFloat(score);
  if (isNaN(num)) return score; // fallback if AI returns qualitative
  if (num >= 9) return "High Impact";
  if (num >= 7) return "Medium-High Impact";
  if (num >= 5) return "Moderate Impact";
  if (num >= 3) return "Low Impact";
  return "Minimal Impact";
};

// Helper function to interpret Value Match Index (VMI)
const interpretVMI = (vmi: string): string => {
  const num = parseFloat(vmi.replace("%", ""));
  if (isNaN(num)) return vmi; // fallback if AI returns qualitative
  if (num >= 95) return "Perfect Match";
  if (num >= 85) return "Strong Match";
  if (num >= 70) return "Moderate Match";
  if (num >= 50) return "Weak Match";
  return "Poor Match";
};

const BarterEngine: React.FC = () => {
  const [have, setHave] = useState('');
  const [want, setWant] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<BarterMatchResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleConsult = async () => {
    if (!have || !want) {
      setErrorMsg('Please enter both fields to generate an exchange map.');
      return;
    }
    setErrorMsg(null);
    setLoading(true);
    try {
      const advice = await getBarterAdvice(have, want);
      setResult(advice);
    } catch (error) {
      console.error(error);
      setErrorMsg('Unable to synchronize nodes. Please try again.');
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
                    Engine
                  </span>
                </h2>
                <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-cyan-400 to-purple-600 mb-6 sm:mb-8"></div>
                <p className="text-slate-400 text-base sm:text-lg md:text-xl font-light max-w-2xl leading-relaxed px-2">
                  The heart of our universe. Analyze potential knowledge exchanges and discover how your mastery can
                  fuel your growth.
                </p>
              </div>

              {/* Input grid */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto,1fr] items-center gap-6 sm:gap-8 mb-8">
                {/* Skill to offer */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3 px-1">
                    <Search className="w-4 h-4 text-cyan-400" />
                    <label className="text-[10px] sm:text-[11px] font-black text-slate-500 uppercase tracking-[0.3em]">
                      Skill to Offer
                    </label>
                  </div>
                  <input
                    type="text"
                    value={have}
                    onChange={(e) => setHave(e.target.value)}
                    placeholder="e.g., Blockchain Architecture"
                    className="w-full bg-slate-950/80 border border-white/10 rounded-2xl sm:rounded-3xl px-5 sm:px-8 py-4 sm:py-6 text-white placeholder:text-slate-700 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all text-base sm:text-lg md:text-xl font-medium"
                  />
                </div>

                {/* Arrow (stays centered) */}
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
                      Skill to Acquire
                    </label>
                  </div>
                  <input
                    type="text"
                    value={want}
                    onChange={(e) => setWant(e.target.value)}
                    placeholder="e.g., AI Ethics Consulting"
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
                    Synchronizing Nodal Points...
                  </span>
                ) : (
                  <span className="relative z-10">Generate Exchange Map</span>
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
                        Analysis Result
                      </div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-grotesk tracking-tight uppercase">
                        Protocol: Value-Match
                      </h3>
                    </div>

                    {/* KPI pills (wrap on mobile) */}
                    <div className="flex flex-wrap items-center gap-3">
                      {/* Estimated value */}
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/5 border border-cyan-500/20">
                        <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-cyan-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-wider">
                          {result.estimatedValue ?? 'N/A'}
                        </span>
                      </div>
                      {/* Value match index */}
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/5 border border-purple-500/20">
                        <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
                        <span className="text-purple-300 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-wider">
                          VMI: {interpretVMI(result.valueMatchIndex ?? 'N/A')}
                        </span>
                      </div>

                        {/* Impact Score */}
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/5 border border-pink-500/20">
                        <AlertTriangle className="w-4 h-4 text-pink-400" />
                        <span className="text-pink-300 text-xs font-black uppercase tracking-wider">
                          {interpretImpactScore(result.impactScore)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Strategy */}
                  <p className="text-slate-300 text-lg sm:text-xl md:text-2xl leading-relaxed mb-10 sm:mb-12 md:mb-16 font-light italic">
                    "{result.exchangeStrategy ?? 'No strategy returned'}"
                  </p>

                  {/* Meta badges (optional render) */}
                  {(result.skillCategory || result.skillLevelMatch) && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
                      {result.skillCategory && (
                        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                          <Layers className="w-5 h-5 text-cyan-400" />
                          <div className="text-slate-300 text-sm">
                            <span className="text-slate-500 uppercase tracking-[0.2em] text-[10px] font-black block mb-1">
                              Skill category
                            </span>
                            {result.skillCategory}
                          </div>
                        </div>
                      )}
                      {result.skillLevelMatch && (
                        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                          <BadgeInfo className="w-5 h-5 text-purple-400" />
                          <div className="text-slate-300 text-sm">
                            <span className="text-slate-500 uppercase tracking-[0.2em] text-[10px] font-black block mb-1">
                              Level match
                            </span>
                            {result.skillLevelMatch}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
                    {/* Milestones */}
                    <div className="space-y-6 sm:space-y-8 md:space-y-10">
                      <h4 className="text-white font-black text-[10px] sm:text-xs uppercase tracking-[0.4em] flex items-center gap-3 sm:gap-4">
                        <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
                        Implementation Milestones
                      </h4>
                      <div className="space-y-4 sm:space-y-6">
                        {(result.potentialPathways ?? []).map((path, idx) => (
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
                        {(!result.potentialPathways || result.potentialPathways.length === 0) && (
                          <div className="p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/5 text-slate-400">
                            No milestones provided.
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Duration + action + complementary + risks/impact */}
                    <div className="space-y-6 sm:space-y-8 md:space-y-12">
                      {/* Duration */}
                      <div className="p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] bg-cyan-500/5 border border-cyan-500/10 space-y-4 sm:space-y-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-10">
                          <Timer className="w-24 h-24 sm:w-32 sm:h-32" />
                        </div>
                        <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-4 relative z-10">
                          <Timer className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                          <h4 className="text-white font-black text-[10px] sm:text-xs uppercase tracking-widest">
                            Time Synchronization
                          </h4>
                        </div>
                        <p className="text-slate-400 text-sm sm:text-lg leading-relaxed font-light relative z-10">
                          {result.recommendedDuration ?? 'No duration provided'}
                        </p>
                      </div>

                      {/* Complementary skills */}
                      {result.complementarySkills && result.complementarySkills.length > 0 && (
                        <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10">
                          <div className="flex items-center gap-3 mb-4">
                            <Sparkles className="w-5 h-5 text-cyan-400" />
                            <h5 className="text-white font-black text-[10px] sm:text-xs uppercase tracking-[0.25em]">
                              Complementary Skills
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

                      {/* Risks + impact */}
                      {(result.riskFactors?.length || result.impactScore) && (
                        <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                          {result.riskFactors && result.riskFactors.length > 0 && (
                            <>
                              <div className="flex items-center gap-3">
                                <AlertTriangle className="w-5 h-5 text-pink-400" />
                                <h5 className="text-white font-black text-[10px] sm:text-xs uppercase tracking-[0.25em]">
                                  Risk Factors
                                </h5>
                              </div>
                              <ul className="list-disc list-inside space-y-2">
                                {result.riskFactors.map((risk, idx) => (
                                  <li key={idx} className="text-slate-400 text-sm">
                                    {risk}
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                          {result.impactScore && (
                            <div className="mt-2 flex items-center justify-between px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                              <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.25em]">
                                Impact Score
                              </span>
                              <span className="text-cyan-300 text-sm font-bold">{result.impactScore}</span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Action */}
                      <button className="w-full py-4 sm:py-5 md:py-6 bg-gradient-to-r from-cyan-600 to-purple-700 text-white rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm tracking-[0.2em] uppercase hover:scale-[1.02] transition-all shadow-xl shadow-cyan-900/20">
                        Initiate Secure Link
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