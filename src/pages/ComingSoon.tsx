import React from "react";
import { Rocket } from "lucide-react";

const ComingSoon: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-24 relative overflow-hidden mt-20">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full animate-float-slow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-8">
        <div className="flex flex-col items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
            <Rocket className="w-10 h-10 text-cyan-400 animate-bounce" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white font-grotesk tracking-tight">
            Coming{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Soon
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-md mx-auto leading-relaxed">
            We’re working hard to bring you something amazing. Stay tuned for the launch of Barterverse’s Ecosystem.
          </p>
        </div>

        {/* CTA */}
        <a
          href="mailto:info@thebarterverse.com?subject=Early%20Citizen"
          className="inline-block mt-6 px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-xl font-black text-sm tracking-[0.2em] uppercase hover:scale-[1.02] transition-all active:scale-95"
        >
          Notify Me
        </a>
      </div>
    </main>
  );
};

export default ComingSoon;