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
} from 'lucide-react';
import { getBarterAdvice } from '../services/geminiService';
import type { BarterMatchResult } from '../../types';

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
    <section id="barter-engine" className="py-40 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="relative group">
          {/* Glow frame */}
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 rounded-[4rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>

          <div className="relative glass-panel rounded-[3.5rem] p-8 md:p-20 overflow-hidden border border-white/10">
            {/* Matrix scanline */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
              <div className="scanline"></div>
            </div>

            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col items-center text-center mb-16">
                <div className="w-20 h-20 rounded-3xl bg-cyan-500/10 flex items-center justify-center mb-8 border border-cyan-500/20">
                  <Zap className="w-10 h-10 text-cyan-400" />
                </div>
                <h2 className="text-4xl md:text-7xl font-bold text-white font-grotesk tracking-tighter mb-6 uppercase">
                  Vortex <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Engine</span>
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-600 mb-8"></div>
                <p className="text-slate-400 text-xl font-light max-w-2xl leading-relaxed">
                  The heart of our universe. Analyze potential knowledge exchanges and discover how your mastery can fuel your growth.
                </p>
              </div>

              {/* Input grid */}
              <div className="grid lg:grid-cols-[1fr,auto,1fr] items-center gap-10 mb-8">
                {/* Skill to offer */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 px-1">
                    <Search className="w-4 h-4 text-cyan-400" />
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
                      Skill to Offer
                    </label>
                  </div>
                  <input
                    type="text"
                    value={have}
                    onChange={(e) => setHave(e.target.value)}
                    placeholder="e.g., Blockchain Architecture"
                    className="w-full bg-slate-950/80 border border-white/10 rounded-3xl px-10 py-7 text-white placeholder:text-slate-700 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all text-xl font-medium"
                  />
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all hover:scale-110">
                    <ArrowRightLeft className="w-7 h-7" />
                  </div>
                </div>

                {/* Skill to acquire */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 px-1">
                    <Target className="w-4 h-4 text-purple-400" />
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
                      Skill to Acquire
                    </label>
                  </div>
                  <input
                    type="text"
                    value={want}
                    onChange={(e) => setWant(e.target.value)}
                    placeholder="e.g., AI Ethics Consulting"
                    className="w-full bg-slate-950/80 border border-white/10 rounded-3xl px-10 py-7 text-white placeholder:text-slate-700 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all text-xl font-medium"
                  />
                </div>
              </div>

              {/* Inline error */}
              {errorMsg && (
                <div className="mb-8 px-6 py-4 rounded-2xl bg-pink-500/10 border border-pink-500/30 text-pink-300 text-sm">
                  {errorMsg}
                </div>
              )}

              {/* Consult button */}
              <button
                onClick={handleConsult}
                disabled={loading || !have || !want}
                className={`group relative w-full py-8 rounded-[2rem] font-black text-2xl tracking-[0.2em] uppercase transition-all shadow-2xl overflow-hidden ${
                  loading
                    ? 'bg-slate-900 text-slate-700 cursor-not-allowed'
                    : 'bg-gradient-to-r from-cyan-400 to-purple-600 text-white hover:scale-[1.02]'
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-4">
                    <Loader2 className="animate-spin w-8 h-8" />
                    Synchronizing Nodal Points...
                  </span>
                ) : (
                  <span className="relative z-10">Generate Exchange Map</span>
                )}
              </button>

              {/* Result */}
              {result && (
                <div className="mt-24 p-12 rounded-[3rem] bg-slate-950/80 border border-white/10 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                  {/* Header row */}
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-8">
                    <div>
                      <div className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em] mb-2">
                        Analysis Result
                      </div>
                      <h3 className="text-4xl font-bold text-white font-grotesk tracking-tight uppercase">
                        Protocol: Value-Match
                      </h3>
                    </div>
                    <div className="flex items-center gap-4 px-8 py-3 rounded-full bg-cyan-500/5 border border-cyan-500/20">
                      <TrendingUp className="w-5 h-5 text-cyan-400" />
                      <span className="text-cyan-400 text-sm font-black uppercase tracking-widest">
                        {result.estimatedValue ?? 'N/A'}
                      </span>
                    </div>
                  </div>

                  {/* Strategy */}
                  <p className="text-slate-300 text-2xl leading-relaxed mb-16 font-light italic">
                    "{result.exchangeStrategy ?? 'No strategy returned'}"
                  </p>

                  <div className="grid lg:grid-cols-2 gap-20">
                    {/* Milestones */}
                    <div className="space-y-10">
                      <h4 className="text-white font-black text-xs uppercase tracking-[0.4em] flex items-center gap-4">
                        <ShieldCheck className="w-6 h-6 text-cyan-500" />
                        Implementation Milestones
                      </h4>
                      <div className="space-y-6">
                        {(result.potentialPathways ?? []).map((path, idx) => (
                          <div
                            key={idx}
                            className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group/item"
                          >
                            <span className="text-cyan-500 font-bold font-grotesk text-xl opacity-40 group-hover/item:opacity-100 transition-opacity">
                              0{idx + 1}
                            </span>
                            <p className="text-slate-400 text-base leading-relaxed">{path}</p>
                          </div>
                        ))}
                        {(!result.potentialPathways || result.potentialPathways.length === 0) && (
                          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-slate-400">
                            No milestones provided.
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Duration + action */}
                    <div className="space-y-12">
                      <div className="p-10 rounded-[2.5rem] bg-cyan-500/5 border border-cyan-500/10 space-y-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                          <Timer className="w-32 h-32" />
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                          <Timer className="w-6 h-6 text-cyan-400" />
                          <h4 className="text-white font-black text-xs uppercase tracking-widest">
                            Time Synchronization
                          </h4>
                        </div>
                        <p className="text-slate-400 text-lg leading-relaxed font-light relative z-10">
                          {result.recommendedDuration ?? 'No duration provided'}
                        </p>
                      </div>

                      <button className="w-full py-6 bg-gradient-to-r from-cyan-600 to-purple-700 text-white rounded-2xl font-black text-sm tracking-[0.2em] uppercase hover:scale-[1.02] transition-all shadow-xl shadow-cyan-900/20">
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