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

type Sector = {
  title: string;
  description: string;
  icon:
    | 'Terminal'
    | 'Building2'
    | 'GraduationCap'
    | 'Wallet'
    | 'Shield'
    | 'AlertTriangle'
    | 'Cpu';
  tags: string[];
};

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
    description:
      'Smart property location and acquisition powered by decentralized asset exchange.',
    icon: 'Building2',
    tags: ['GIS', 'IoT Sensors', 'Blockchain', 'Smart Contracts'],
  },
  {
    title: 'EdTech Spheres',
    description:
      'Smart learning platforms and certification systems for adaptive education.',
    icon: 'GraduationCap',
    tags: ['LMS', 'AR/VR', 'Gamification', 'Adaptive AI'],
  },
  {
    title: 'FinTech Pulse',
    description:
      'Non-monetary financial systems and inclusive value transfer protocols.',
    icon: 'Wallet',
    tags: ['DeFi', 'Smart Nodes', 'Zero-Knowledge Proofs'],
  },
  {
    title: 'Security Grid',
    description:
      'Smart security solutions for cyber resilience and AI-driven surveillance.',
    icon: 'Shield',
    tags: ['Cybersecurity', 'AI Vision', 'Zero Trust', 'Encryption'],
  },
  {
    title: 'Emergency Systems',
    description:
      'Smart emergency response and predictive crisis coordination.',
    icon: 'AlertTriangle',
    tags: ['IoT Alerts', 'Predictive AI', 'Edge Computing'],
  },
  {
    title: 'AI Applications Hub',
    description:
      'Applied AI solutions across industries, powering automation and intelligence.',
    icon: 'Cpu',
    tags: ['NLP', 'Computer Vision', 'Generative AI'],
  },
];

const IconMap: Record<Sector['icon'], React.ComponentType<{ className?: string }>> = {
  Terminal,
  Building2,
  GraduationCap,
  Wallet,
  Shield,
  AlertTriangle,
  Cpu,
};

const SectorsSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLDivElement | null>(null);
  const [stepPx, setStepPx] = useState(0);

  // Measure first slide width + gap for desktop/tablet transform
  useEffect(() => {
    const measure = () => {
      const el = itemRef.current;
      if (!el) return;
      const style = window.getComputedStyle(el);
      const marginRight = parseFloat(style.marginRight || '0');
      setStepPx(el.offsetWidth + marginRight);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Auto-advance every 5s, pause on hover (desktop/tablet only)
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
    <section id="sectors" className="py-20 sm:py-24 px-4 bg-slate-950/40 relative">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[320px] h-[320px] bg-purple-500/10 blur-[100px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[260px] h-[260px] bg-cyan-500/10 blur-[90px] rounded-full animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 lg:mb-12 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-purple-400 font-black text-[10px] uppercase tracking-[0.4em] mb-4">
              <Layers className="w-4 h-4" />
              Integrated Solutions
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-grotesk tracking-tight leading-[1.05]">
              Ecosystem{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Verticals
              </span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-xl">
              Smart solutions across education, security, emergency response, AI innovation, and property technology.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mt-5"></div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Previous"
              onClick={prev}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 transition-all flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              aria-label="Next"
              onClick={next}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 transition-all flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile: single-card view (no horizontal overflow) */}
        <div className="block md:hidden">
          {(() => {
            const sector = sectors[index];
            const Icon = IconMap[sector.icon];
            return (
              <div className="mx-auto w-full max-w-[520px]">
                <div className="group relative w-full overflow-hidden rounded-3xl bg-slate-900/30 p-6 border border-white/10 transition-all hover:border-cyan-500/50">
                  <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Icon className="w-36 h-36 text-white" />
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-cyan-500/50 transition-colors">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3 font-grotesk tracking-wide group-hover:text-cyan-400 transition-colors">
                      {sector.title}
                    </h4>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed font-light">
                      {sector.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {sector.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-slate-800/40 text-[10px] text-cyan-300 font-bold uppercase tracking-[0.15em] border border-cyan-500/20 group-hover:border-cyan-400/40 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-5 right-5 text-[9px] font-mono text-purple-400 opacity-40 group-hover:opacity-80 transition-opacity">
                    NODE-{index + 1}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Dots indicator */}
          <div className="mt-8 flex items-center justify-center gap-2.5">
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

        {/* Tablet/Desktop: transform slider */}
        <div
          className="relative overflow-hidden rounded-3xl hidden md:block"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 via-slate-950/20 to-transparent"></div>

          <div
            ref={trackRef}
            className="flex items-stretch gap-6 transition-transform duration-700 ease-out px-2"
            style={{ transform: `translateX(-${index * stepPx}px)` }}
          >
            {sectors.map((sector, i) => {
              const Icon = IconMap[sector.icon];
              return (
                <div
                  key={sector.title}
                  ref={i === 0 ? itemRef : undefined}
                  className="group relative w-[320px] lg:w-[360px] shrink-0 overflow-hidden rounded-3xl bg-slate-900/30 p-8 border border-white/10 transition-all duration-500 hover:border-cyan-500/50"
                >
                  <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Icon className="w-40 h-40 text-white" />
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-cyan-500/50 transition-colors">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4 font-grotesk tracking-wide group-hover:text-cyan-400 transition-colors">
                      {sector.title}
                    </h4>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed font-light">{sector.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {sector.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-slate-800/40 text-[9px] text-cyan-300 font-bold uppercase tracking-[0.2em] border border-cyan-500/20 group-hover:border-cyan-400/40 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-6 text-[9px] font-mono text-purple-400 opacity-40 group-hover:opacity-80 transition-opacity">
                    NODE-{i + 1}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots indicator */}
          <div className="mt-8 flex items-center justify-center gap-3">
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