import React from "react";
import { Lightbulb, Hammer, Link2 } from "lucide-react";

const CitizenshipFlowDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-12 mt-16">
      {/* Intro narrative */}
      <div className="max-w-3xl text-center space-y-4">
        {/* <h2 className="text-2xl md:text-3xl font-bold text-white">
          Citizenship Ecosystem Flow
        </h2> */}
        <p className="text-slate-400 text-lg leading-relaxed">
          The Barterverse citizenship model is a living ecosystem. Ideas are sparked by{" "}
          <span className="text-cyan-400 font-semibold">Initiators</span>, transformed into reality by{" "}
          <span className="text-purple-400 font-semibold">Executors</span>, and sustained through trust and balance by{" "}
          <span className="text-cyan-400 font-semibold">Connectors</span>. Together, they form a continuous cycle where
          creativity becomes action, action becomes connection, and connection inspires new ideas.
        </p>
      </div>

      {/* Circular diagram */}
      <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-white/10 flex items-center justify-center">
        {/* Initiators (top) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 glass-panel p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center space-y-2 w-40 animate-fade-in">
          <Lightbulb className="w-8 h-8 text-cyan-400 animate-pulse" />
          <h3 className="text-sm font-bold text-white">Initiators</h3>
          <p className="text-slate-400 text-xs">Spark ideas and propose exchanges.</p>
        </div>

        {/* Executors (bottom-left) */}
        <div className="absolute bottom-8 left-0 glass-panel p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center space-y-2 w-40 animate-fade-in delay-200">
          <Hammer className="w-8 h-8 text-purple-400 animate-pulse" />
          <h3 className="text-sm font-bold text-white">Executors</h3>
          <p className="text-slate-400 text-xs">Transform ideas into reality with professionalism.</p>
        </div>

        {/* Connectors (bottom-right) */}
        <div className="absolute bottom-8 right-0 glass-panel p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center space-y-2 w-40 animate-fade-in delay-400">
          <Link2 className="w-8 h-8 text-cyan-400 animate-pulse" />
          <h3 className="text-sm font-bold text-white">Connectors</h3>
          <p className="text-slate-400 text-xs">Bridge and balance exchanges.</p>
        </div>

        {/* Animated circular arrows */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-600 animate-spin-slow"></div>

        {/* Flow labels */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-slate-400 font-semibold">
          Idea
        </div>
        <div className="absolute bottom-1/2 left-0 -translate-y-1/2 -translate-x-6 text-xs text-slate-400 font-semibold rotate-[-90deg]">
          Action
        </div>
        <div className="absolute bottom-1/2 right-0 -translate-y-1/2 translate-x-6 text-xs text-slate-400 font-semibold rotate-[90deg]">
          Connection
        </div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-400 font-semibold">
          Back to Idea
        </div>
      </div>

      {/* Closing narrative */}
      <div className="max-w-2xl text-center mt-8">
        <p className="text-slate-400 text-sm leading-relaxed">
          This cycle ensures that Barterverse remains dynamic: Initiators fuel innovation, Executors deliver tangible
          outcomes, and Connectors weave trust across the community. The loop never ends — it’s the heartbeat of
          citizenship.
        </p>
      </div>
    </div>
  );
};

export default CitizenshipFlowDiagram;