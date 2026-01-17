import React from "react";
import { Lightbulb, Hammer, Link2 } from "lucide-react";

const CitizenshipFlowDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-12 mt-16">
      {/* Intro narrative */}
      <div className="max-w-3xl text-center space-y-4">
        <p className="text-slate-400 text-lg leading-relaxed">
          Barterverse is not a marketplace — it is a programmable civilization layer. 
          Value is not priced; it is{" "}
          <span className="text-cyan-400 font-semibold">measured</span>,{" "}
          <span className="text-purple-400 font-semibold">matched</span>, and{" "}
          <span className="text-cyan-400 font-semibold">exchanged</span> through intelligent coordination systems.
          At the core of this economy are three sovereign economic actors that form the operating system of human collaboration.
        </p>
      </div>

      {/* Circular diagram */}
      <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-white/10 flex items-center justify-center">
        {/* Initiators (top) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 glass-panel p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center space-y-2 w-40 animate-fade-in">
          <Lightbulb className="w-8 h-8 text-cyan-400 animate-pulse" />
          <h3 className="text-sm font-bold text-white">Initiators</h3>
          <p className="text-slate-400 text-xs">
            Originate value intent, problems, ideas, and exchange proposals that enter the Barterverse economy graph.
          </p>
        </div>

        {/* Executors (bottom-left) */}
        <div className="absolute bottom-8 left-0 glass-panel p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center space-y-2 w-40 animate-fade-in delay-200">
          <Hammer className="w-8 h-8 text-purple-400 animate-pulse" />
          <h3 className="text-sm font-bold text-white">Executors</h3>
          <p className="text-slate-400 text-xs">
            Convert value intent into real-world outcomes through skills, labor, expertise, and execution capacity.
          </p>
        </div>

        {/* Connectors (bottom-right) */}
        <div className="absolute bottom-8 right-0 glass-panel p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center space-y-2 w-40 animate-fade-in delay-400">
          <Link2 className="w-8 h-8 text-cyan-400 animate-pulse" />
          <h3 className="text-sm font-bold text-white">Connectors</h3>
          <p className="text-slate-400 text-xs">
            Optimize trust, liquidity, reputation, and alignment across the exchange network using intelligence layers.
          </p>
        </div>

        {/* Animated circular arrows */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-600 animate-spin-slow"></div>

        {/* Flow labels */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-slate-400 font-semibold">
          Value Intent
        </div>
        <div className="absolute bottom-1/2 left-0 -translate-y-1/2 -translate-x-6 text-xs text-slate-400 font-semibold rotate-[-90deg]">
          Execution
        </div>
        <div className="absolute bottom-1/2 right-0 -translate-y-1/2 translate-x-6 text-xs text-slate-400 font-semibold rotate-[90deg]">
          Coordination
        </div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-400 font-semibold">
          New Value Emerges
        </div>
      </div>

      {/* Closing narrative */}
      <div className="max-w-2xl text-center mt-8">
        <p className="text-slate-400 text-lg leading-relaxed">
          Together, these roles form Barterverse’s{" "}
          <span className="text-cyan-400 font-semibold">Value Operating System</span>. 
          Every exchange is measured through the{" "}
          <span className="text-purple-400 font-semibold">Value Match Index (VMI)</span>, 
          priced dynamically via the{" "}
          <span className="text-cyan-400 font-semibold">Vortex Engine</span>, 
          settled through the{" "}
          <span className="text-purple-400 font-semibold">Bartering Engine</span>, 
          and denominated in{" "}
          <span className="text-cyan-400 font-semibold">Barter Credit (BC)</span> — a programmable unit of human value.
        </p>
      </div>
    </div>
  );
};

export default CitizenshipFlowDiagram;
