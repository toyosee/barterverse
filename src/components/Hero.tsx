import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Play, Sparkles, Globe2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const YOUTUBE_VIDEO_ID = "Brt3FPsZmxg"; 

  return (
    <section
      id="vision"
      className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center pt-24 pb-10 sm:pb-12 px-4 overflow-hidden"
    >
      {/* Futuristic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] sm:w-[700px] sm:h-[700px] lg:w-[900px] lg:h-[900px] bg-gradient-to-r from-cyan-500/20 to-purple-600/20 blur-[120px] sm:blur-[160px] lg:blur-[180px] rounded-full animate-pulse"></div>
        <div className="absolute top-[22%] left-[18%] w-56 h-56 sm:w-72 sm:h-72 bg-cyan-400/10 blur-[80px] sm:blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-[30%] right-[15%] w-48 h-48 sm:w-60 sm:h-60 bg-purple-500/10 blur-[70px] sm:blur-[100px] rounded-full animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10 pt-6 sm:pt-10">
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 mb-8 sm:mb-10 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[9px] sm:text-[10px] font-black tracking-[0.35em] sm:tracking-[0.4em] uppercase backdrop-blur-xl shadow-lg">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          The Economic Layer of Human Potential
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 sm:mb-10 tracking-tight font-grotesk leading-[1.05] md:leading-[0.95] uppercase">
          Program Value.
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
            Transcend Money.
          </span>
        </h1>

        {/* Subtext */}
        <p className="max-w-3xl mx-auto text-slate-400 text-base sm:text-lg md:text-2xl mb-12 sm:mb-16 leading-relaxed font-light px-2">
          Welcome to <span className="text-cyan-400 font-semibold">Barterverse</span> — a programmable economic universe where
          <span className="text-purple-400 font-semibold"> human skill, intelligence, time, and execution </span>
          become tradeable assets, powered by AI valuation engines and cryptographic settlement layers.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center mb-20 sm:mb-28">
          <Link to="/coming-soon">
            <button className="group relative w-full sm:w-auto px-9 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm tracking-[0.2em] hover:shadow-[0_0_50px_rgba(147,51,234,0.35)] transition-all overflow-hidden uppercase">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Enter the Economy <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
            </button>
          </Link>
          <Link to="/coming-soon">
            <button className="w-full sm:w-auto px-9 sm:px-12 py-4 sm:py-5 bg-transparent border border-white/20 text-white rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm tracking-[0.2em] hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-3 uppercase">
              <Globe2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
              Explore the Protocol
            </button>
          </Link>
        </div>


        {/* Cinematic Preview Section */}
        <div className="relative max-w-6xl mx-auto group px-2 sm:px-0">
          <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-cyan-500/30 to-purple-600/30 rounded-2xl sm:rounded-[3rem] blur-2xl sm:blur-3xl opacity-25 group-hover:opacity-50 transition-opacity duration-1000"></div>
          
          <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl sm:rounded-[2.5rem] overflow-hidden glass-panel p-1.5 sm:p-2 border border-white/10">
            <div className="w-full h-full rounded-lg sm:rounded-[2.2rem] bg-slate-900 overflow-hidden relative">
              
              {!isPlaying ? (
                <>
                  <img
                    src="https://images.unsplash.com/photo-1614850523296-e8c041de239b?auto=format&fit=crop&q=80&w=2000"
                    alt=""
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay scale-[1.06] sm:scale-110 group-hover:scale-100 transition-transform duration-[12s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <button 
                      onClick={() => setIsPlaying(true)}
                      className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-white/10 backdrop-blur-2xl sm:backdrop-blur-3xl border border-white/20 flex items-center justify-center cursor-pointer hover:scale-110 hover:bg-white/20 transition-all group/play"
                    >
                      <Play className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white group-hover:text-cyan-400 transition-colors ml-1" />
                    </button>
                  </div>
                </>
              ) : (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&modestbranding=1&rel=0`}
                  title="Barterverse Protocol Overview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}

              {!isPlaying && (
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:28px_28px] opacity-10 pointer-events-none"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
