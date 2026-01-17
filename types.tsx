// =======================
// Core Experience Types
// =======================

export interface Persona {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  color: string;
  archetype?: "Initiator" | "Executor" | "Connector" | "Hybrid";
  accessTier?: "Public" | "Citizen" | "Verified" | "Sovereign";
}

export interface Sector {
  title: string;
  description: string;
  icon: string; // Lucide icon name
  tags: string[];
  maturityLevel?: "Emerging" | "Scaling" | "Enterprise" | "Critical";
  protocolDomain?: "Infrastructure" | "Governance" | "Security" | "AI" | "Economic";
}

// =======================
// Barter Protocol Types
// =======================

export type SettlementMode =
  | "instant-peer"
  | "milestone-escrow"
  | "connector-mediated"
  | "dao-arbitrated"
  | "smart-contract";

export type TrustTier =
  | "unverified"
  | "probationary"
  | "verified"
  | "trusted"
  | "sovereign";

export interface ReputationDelta {
  participant: "initiator" | "executor" | "connector";
  change: number;              // Positive or negative reputation impact
  reason: string;
}

export interface RiskProfile {
  risk: string;
  severity: "Low" | "Medium" | "High" | "Critical";
  mitigation: string;
}

export interface ArbitrationProfile {
  required: boolean;
  escalationLevel: "none" | "connector" | "council" | "dao";
  jurisdiction?: string;
}

// =======================
// Exchange Intelligence Result (V2)
// =======================

export interface BarterMatchResult {
  exchangeStrategy: string;              // High-level execution narrative
  settlementPathways: string[];          // Protocol settlement steps
  estimatedValue: {
    tier: 'Micro' | 'Standard' | 'Premium' | 'Strategic';
    units?: string;                      // Optional BC units or credits
    rationale: string;
  };
  recommendedDuration: string;           // Lifecycle timeframe

  skillDomain: string;                   // Primary domain classification
  competencyAlignment: 'Beginner' | 'Intermediate' | 'Advanced' | 'Mixed';

  complementarySkills: string[];

  trustTier: 'T0' | 'T1' | 'T2' | 'T3';   // Protocol trust classification
  settlementMode: 'Instant' | 'Milestone' | 'Escrow' | 'ReputationLocked' | 'Hybrid';
  arbitrationRequired: boolean;          // Whether third-party arbitration is recommended

  riskProfile: {
    risk: string;
    severity: 'Low' | 'Medium' | 'High';
    mitigation: string;
  }[];

  impactScore: {
    value: number;                       // 0–100 ecosystem leverage score
    classification: 'Low' | 'Medium' | 'High' | 'Transformational';
  };

  valueMatchIndex: {
    ratio: number;                       // 0.0–1.0
    classification: 'Weak' | 'Moderate' | 'Strong' | 'Optimal';
  };

  executionMode: 'Synchronous' | 'Asynchronous' | 'Hybrid';
  exchangeArchetype: 'Mentorship' | 'SkillSwap' | 'ExecutionExchange' | 'StrategicAlliance';

  trustReadiness: 'Low' | 'Medium' | 'High';
  ecosystemLeverage: 'Low' | 'Medium' | 'High';

  reputationDelta: {
    providerGain: number;
    requesterGain: number;
    decayRisk?: number;
  };
}


// =======================
// System Interfaces
// =======================

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
