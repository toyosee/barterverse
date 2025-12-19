export interface Persona {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  color: string;
}

export interface Sector {
  title: string;
  description: string;
  icon: string; // Lucide icon name
  tags: string[];
}

export interface BarterMatchResult {
  exchangeStrategy: string;            // Narrative of how the barter should work
  potentialPathways: string[];         // Step-by-step pathways for achieving the exchange
  estimatedValue: string;              // Relative value of this exchange in the ecosystem
  recommendedDuration: string;         // Suggested timeframe for the barter
  skillCategory: string;               // Domain classification of the skills
  skillLevelMatch: string;             // Assessment of level compatibility (beginner/intermediate/advanced)
  complementarySkills: string[];       // Other skills that could enhance the exchange
  riskFactors: string[];               // Potential challenges or mismatches
  impactScore: string;                 // Numeric or qualitative score of ecosystem impact
  valueMatchIndex: string;             // KPI showing how well offered skill value matches desired skill value (percentage or ratio)
}