// src/components/MatchingFlowDiagram.tsx
import React from "react";
import { CheckCircle, FileText, Shuffle, ArrowRightLeft, Star } from "lucide-react";

const steps = [
  {
    icon: <CheckCircle className="w-6 h-6 text-cyan-400" />,
    title: "Skill Verification",
    description: "Users provide portfolios, certifications, or references. Verified before entering the exchange pool.",
  },
  {
    icon: <FileText className="w-6 h-6 text-purple-400" />,
    title: "Brief Generation",
    description: "The engine generates tailored briefs based on user skills, credibility, and ecosystem demand.",
  },
  {
    icon: <Shuffle className="w-6 h-6 text-cyan-400" />,
    title: "Smart Matching",
    description: "Algorithms weigh professionalism, credibility, and value balance to recommend sustainable exchanges.",
  },
  {
    icon: <ArrowRightLeft className="w-6 h-6 text-purple-400" />,
    title: "Exchange Execution",
    description: "Matched participants engage in structured barter protocols with clear milestones and safeguards.",
  },
  {
    icon: <Star className="w-6 h-6 text-cyan-400" />,
    title: "Review & Reputation",
    description: "Post-exchange reviews feed into credibility scoring, strengthening trust and future matches.",
  },
];

const MatchingFlowDiagram: React.FC = () => {
  return (
    <div className="grid md:grid-cols-5 gap-8 mt-12">
      {steps.map((step, idx) => (
        <div
          key={idx}
          className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center space-y-4"
        >
          {step.icon}
          <h3 className="text-white font-bold text-sm uppercase tracking-wide">{step.title}</h3>
          <p className="text-slate-400 text-xs">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MatchingFlowDiagram;