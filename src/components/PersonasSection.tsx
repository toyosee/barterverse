import React from 'react';
import { Lightbulb, Cpu, Network, ArrowRight, UserCheck } from 'lucide-react';
import type { Persona } from '../../types';

const personas: Persona[] = [
  {
    id: 'initiators',
    title: 'Initiators',
    description:
      'The architects of vision. They identify needs and catalyze the exchange process by seeking specialized talent for revolutionary projects.',
    icon: 'Lightbulb',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 'executors',
    title: 'Executors',
    description:
      'Masters of craft. They bring expertise to the table, bartering their mastery for new learning paths or complementary skill sets.',
    icon: 'Cpu',
    color: 'from-cyan-500 to-purple-600',
  },
  {
    id: 'connectors',
    title: 'Connectors',
    description:
      'The fabric of the universe. They facilitate high-value matches, ensuring that the liquidity of knowledge remains fluid and fair.',
    icon: 'Network',
    color: 'from-purple-600 to-pink-500',
  },
];

const PersonasSection: React.FC = () => {
  return (
    <section id="people" className="py-40 px-4 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-black text-[10px] uppercase tracking-[0.4em] mb-6">
            <UserCheck className="w-4 h-4" />
            Citizens of the Universe
          </div>
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 font-grotesk tracking-tight">
            The Core <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Hierarchy</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            In Barterverse, status is defined by value contribution. Everyone fits into one of these essential roles,
            creating a self-sustaining economy of growth.
          </p>
        </div>

        {/* Persona Cards */}
        <div className="grid lg:grid-cols-3 gap-12">
          {personas.map((persona) => {
            const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
              Lightbulb,
              Cpu,
              Network,
            };
            const Icon = IconMap[persona.icon];

            return (
              <div
                key={persona.id}
                className="group relative transform transition-transform duration-700 hover:scale-[1.03] hover:-translate-y-2"
              >
                {/* Glow background */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-br ${persona.color} rounded-[2.5rem] blur opacity-0 group-hover:opacity-30 transition duration-700`}
                ></div>

                {/* Card */}
                <div className="relative glass-panel p-12 rounded-[2.5rem] border border-white/10 hover:border-cyan-400/30 transition-all duration-500 h-full flex flex-col shadow-xl">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${persona.color} flex items-center justify-center mb-10 shadow-lg group-hover:shadow-cyan-500/30 transition-shadow`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-white mb-6 font-grotesk tracking-tight group-hover:text-cyan-400 transition-colors">
                    {persona.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed text-lg mb-10 flex-grow font-light">
                    {persona.description}
                  </p>

                  {/* Footer Action */}
                  <div className="pt-8 border-t border-white/10">
                    <button className="group/btn flex items-center gap-4 text-cyan-400 font-black tracking-[0.2em] text-[10px] uppercase hover:gap-6 transition-all">
                      ACCESS PROTOCOLS <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* HUD overlay */}
                  <div className="absolute top-6 right-6 text-[10px] font-mono text-slate-500 opacity-40 group-hover:opacity-80 transition-opacity">
                    ID: {persona.id.toUpperCase()}
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