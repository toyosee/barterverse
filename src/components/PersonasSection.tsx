import React from 'react';
import { Lightbulb, Cpu, Network, ArrowRight, UserCheck } from 'lucide-react';
import type { Persona } from '../../types';

const personas: Persona[] = [
  {
    id: 'initiators',
    title: 'Initiators',
    description:
      'Originators of value intent. Initiators define problems, opportunities, and unmet needs, encoding them into structured value requests that enter the Barterverse exchange graph. They unlock BC liquidity by catalyzing economic motion.',
    icon: 'Lightbulb',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 'executors',
    title: 'Executors',
    description:
      'Producers of value output. Executors deploy verified skills, labor, and intelligence to fulfill value intents, earning Barter Credits (BC), reputation weight, and pricing leverage across the ecosystem.',
    icon: 'Cpu',
    color: 'from-cyan-500 to-purple-600',
  },
  {
    id: 'connectors',
    title: 'Connectors',
    description:
      'Liquidity and trust orchestrators. Connectors optimize matching efficiency, rebalance supply-demand asymmetries, and stabilize multi-party exchanges — earning BC yield through network optimization and reputation amplification.',
    icon: 'Network',
    color: 'from-purple-600 to-pink-500',
  },
];

const PersonasSection: React.FC = () => {
  const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Lightbulb,
    Cpu,
    Network,
  };

  return (
    <section id="people" className="py-16 sm:py-24 px-4 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-cyan-500/5 blur-[100px] sm:blur-[120px] lg:blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[240px] sm:w-[320px] lg:w-[400px] h-[240px] sm:h-[320px] lg:h-[400px] bg-purple-500/5 blur-[80px] sm:blur-[100px] lg:blur-[120px] rounded-full animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20 lg:mb-32 px-2">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-black text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">
            <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Economic Citizens
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 font-grotesk tracking-tight leading-tight">
            The Core{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Value Actors
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-light leading-relaxed px-2">
            Barterverse is structured around three protocol-native economic roles — each encoding, executing, and
            optimizing value flows within a post-monetary exchange network powered by Barter Credits (BC).
          </p>
        </div>

        {/* Persona Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {personas.map((persona) => {
            const Icon = IconMap[persona.icon];
            return (
              <div
                key={persona.id}
                className="group relative transform transition-transform duration-700 hover:scale-[1.02] hover:-translate-y-1"
              >
                {/* Glow background */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-br ${persona.color} rounded-2xl sm:rounded-[2.5rem] blur opacity-0 group-hover:opacity-30 transition duration-700`}
                ></div>

                {/* Card */}
                <div className="relative glass-panel p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-[2.5rem] border border-white/10 hover:border-cyan-400/30 transition-all duration-500 h-full flex flex-col shadow-xl">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${persona.color} flex items-center justify-center mb-6 sm:mb-8 lg:mb-10 shadow-lg group-hover:shadow-cyan-500/30 transition-shadow`}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 font-grotesk tracking-tight group-hover:text-cyan-400 transition-colors">
                    {persona.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10 flex-grow font-light">
                    {persona.description}
                  </p>

                  {/* Footer Action */}
                  <div className="pt-6 sm:pt-8 border-t border-white/10">
                    <button className="group/btn flex items-center gap-3 sm:gap-4 text-cyan-400 font-black tracking-[0.15em] sm:tracking-[0.2em] text-[9px] sm:text-[10px] uppercase hover:gap-5 sm:hover:gap-6 transition-all">
                      ACCESS ECONOMIC LAYER <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </div>

                  {/* HUD overlay */}
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-[9px] sm:text-[10px] font-mono text-slate-500 opacity-40 group-hover:opacity-80 transition-opacity">
                    ROLE: {persona.id.toUpperCase()}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PersonasSection;
