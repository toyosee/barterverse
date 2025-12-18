import React, { useEffect, useRef, useState } from 'react';
import {
  Building2,
  GraduationCap,
  Wallet,
  Terminal,
  Layers,
  Shield,
  AlertTriangle,
  Cpu,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import type { Sector } from '../../types';

const sectors: Sector[] = [
  {
    title: 'Software Nexus',
    description:
      'The core development engine. Exchange high-level engineering for architecture or product strategy.',
    icon: 'Terminal',
    tags: ['AI/ML', 'React', 'Node.js', 'Cloud', 'Kubernetes'],
  },
  {
    title: 'PropTech Core',
    description: 'Smart property location and acquisition powered by decentralized asset exchange.',
    icon: 'Building2',
    tags: ['GIS', 'IoT Sensors', 'Blockchain', 'Smart Contracts'],
  },
  {
    title: 'EdTech Spheres',
    description: 'Smart learning platforms and certification systems for adaptive education.',
    icon: 'GraduationCap',
    tags: ['LMS', 'AR/VR', 'Gamification', 'Adaptive AI'],
  },
  {
    title: 'FinTech Pulse',
    description: 'Non-monetary financial systems and inclusive value transfer protocols.',
    icon: 'Wallet',
    tags: ['DeFi', 'Smart Nodes', 'Zero-Knowledge Proofs'],
  },
  {
    title: 'Security Grid',
    description: 'Smart security solutions for cyber resilience and AI-driven surveillance.',
    icon: 'Shield',
    tags: ['Cybersecurity', 'AI Vision', 'Zero Trust', 'Encryption'],
  },
  {
    title: 'Emergency Systems',
    description: 'Smart emergency response and predictive crisis coordination.',
    icon: 'AlertTriangle',
    tags: ['IoT Alerts', 'Predictive AI', 'Edge Computing'],
  },
  {
    title: 'AI Applications Hub',
    description: 'Applied AI solutions across industries, powering automation and intelligence.',
    icon: 'Cpu',
    tags: ['NLP', 'Computer Vision', 'Generative AI'],
  },
];

const SectorsSection: React.FC = () => {
  const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Terminal,
    Building2,
    GraduationCap,
    Wallet,
    Shield,
    AlertTriangle,
    Cpu,
  };

  // Carousel state
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // Auto-advance every 5s, pause on hover
  useEffect(() => {
    if (isHovering) return;
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % sectors.length);
    }, 5000);
    return () => clearInterval(t);
  }, [isHovering]);

  const prev = () => setIndex((prev) => (prev - 1 + sectors.length) % sectors.length);
  const next = () => setIndex((prev) => (prev + 1) % sectors.length);

  // Keyboard accessibility
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <section id="sectors" className="py-40 px-4 bg-slate-950/40 relative">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-purple-400 font-black text-[10px] uppercase tracking-[0.4em] mb-6">
              <Layers className="w-4 h-4" />
              Integrated Solutions
            </div>
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 font-grotesk tracking-tight leading-[0.85]">
              Ecosystem <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Verticals</span>
            </h2>
            <p className="text-slate-400 text-xl font-light leading-relaxed max-w-xl">
              Beyond the Exchange Vortex and its three core actors, Barterverse also develops smart solutions across
              critical domains — from education and security to emergency response, AI innovation, and property
              technology.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mt-6"></div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Previous"
              onClick={prev}
              className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 hover:-translate-y-0.5 transition-all flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              aria-label="Next"
              onClick={next}
              className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 hover:-translate-y-0.5 transition-all flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel viewport */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Glow rails */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 via-slate-950/20 to-transparent"></div>

          <div className="overflow-hidden rounded-[2rem]">
            <div
              ref={trackRef}
              className="flex items-stretch gap-8 transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(calc((min(100%, 1120px) - 350px)/2 - ${index * (350 + 32)}px))`,
              }}
            >
              {sectors.map((sector, i) => {
                const Icon = IconMap[sector.icon];
                const isActive = i === index;
                return (
                  <div
                    key={i}
                    className={`group relative w-[300px] lg:w-[350px] shrink-0 overflow-hidden rounded-[2.5rem] bg-slate-900/30 p-10 border border-white/10 transition-all duration-500 ${
                      isActive ? 'hover:border-cyan-500/50' : ''
                    }`}
                  >
                    {/* Glow background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>

                    {/* Large faded icon */}
                    <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Icon className="w-48 h-48 text-white" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-12 group-hover:border-cyan-500/50 transition-colors">
                        <Icon className="w-7 h-7 text-cyan-400" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-5 font-grotesk tracking-wide group-hover:text-cyan-400 transition-colors">
                        {sector.title}
                      </h4>
                      <p className="text-slate-400 text-sm mb-10 leading-relaxed font-light">{sector.description}</p>

                      {/* Tech stack tags */}
                      <div className="flex flex-wrap gap-2">
                        {sector.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-1.5 rounded-full bg-slate-800/40 text-[9px] text-cyan-300 font-bold uppercase tracking-[0.2em] border border-cyan-500/20 group-hover:border-cyan-400/40 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* HUD overlay */}
                    <div className="absolute bottom-6 right-6 text-[9px] font-mono text-purple-400 opacity-40 group-hover:opacity-80 transition-opacity">
                      NODE-{i + 1}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="mt-10 flex items-center justify-center gap-3">
            {sectors.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  i === index ? 'bg-cyan-400' : 'bg-white/10 hover:bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;