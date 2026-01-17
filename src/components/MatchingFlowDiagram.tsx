import React from "react";
import { CheckCircle, FileText, Shuffle, ArrowRightLeft, Star } from "lucide-react";

const steps = [
  {
    icon: <CheckCircle className="w-6 h-6 text-cyan-400" />,
    title: "Identity, Skill & Trust Verification",
    description:
      "Participants establish verifiable skill credentials, reputation signals, and behavioral trust scores. These form the base layer of their Value Identity and determine access to higher-value exchange pools.",
  },
  {
    icon: <FileText className="w-6 h-6 text-purple-400" />,
    title: "Value Intent Encoding",
    description:
      "Users define what they offer and what they seek. The system converts this into structured Value Intents — machine-readable economic requests that enter the Barterverse exchange graph.",
  },
  {
    icon: <Shuffle className="w-6 h-6 text-cyan-400" />,
    title: "VMI Matching & Dynamic Pricing",
    description:
      "The Value Match Index (VMI) engine evaluates compatibility, skill depth, timing, reputation, and exchange balance. The Vortex Engine then prices outcomes dynamically in Barter Credits (BC).",
  },
  {
    icon: <ArrowRightLeft className="w-6 h-6 text-purple-400" />,
    title: "Programmable Exchange & Settlement",
    description:
      "Smart exchange contracts coordinate milestones, escrow BC, and release value upon delivery. Multi-party barter, fractional execution, and delayed settlement are natively supported.",
  },
  {
    icon: <Star className="w-6 h-6 text-cyan-400" />,
    title: "Reputation Accrual & BC Yield",
    description:
      "Successful exchanges mint reputation weight, unlock higher BC earning tiers, and increase future pricing power across the Barterverse economy.",
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
          <p className="text-slate-400 text-xs leading-relaxed">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MatchingFlowDiagram;
