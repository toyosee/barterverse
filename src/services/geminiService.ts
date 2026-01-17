import { GoogleGenAI, Type } from "@google/genai";
import type { BarterMatchResult } from "../../types";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GOOGLE_API_KEY || "fallback_api_key",
});

export const getBarterAdvice = async (
  haveSkill: string,
  wantSkill: string
): Promise<BarterMatchResult> => {
  const prompt = `
You are the Vortex Intelligence Engine of Barterverse — a decentralized economic protocol where skills, execution power, and intelligence replace money.

User Profile:
- Offered Capability: "${haveSkill}"
- Desired Capability: "${wantSkill}"

Objective:
Evaluate this exchange opportunity and emit a structured, protocol-ready exchange blueprint optimized for:
- Trust formation
- Fair value alignment
- Execution feasibility
- Reputation economics
- Ecosystem leverage

Return strictly valid JSON that conforms to the following schema:

{
  "exchangeStrategy": "High-level protocol narrative",
  "settlementPathways": ["Stepwise settlement and execution flow"],
  "estimatedValue": {
    "tier": "Micro | Standard | Premium | Strategic",
    "units": "Optional BC units or credits",
    "rationale": "Why this value tier applies"
  },
  "recommendedDuration": "Expected execution lifecycle window",

  "skillDomain": "Primary domain classification",
  "competencyAlignment": "Beginner | Intermediate | Advanced | Mixed",

  "complementarySkills": ["Skills that improve execution leverage"],

  "trustTier": "T0 | T1 | T2 | T3",
  "settlementMode": "Instant | Milestone | Escrow | ReputationLocked | Hybrid",
  "arbitrationRequired": true | false,

  "riskProfile": [
    {
      "risk": "Risk description",
      "severity": "Low | Medium | High",
      "mitigation": "Mitigation strategy"
    }
  ],

  "impactScore": {
    "value": 0-100,
    "classification": "Low | Medium | High | Transformational"
  },

  "valueMatchIndex": {
    "ratio": 0.0-1.0,
    "classification": "Weak | Moderate | Strong | Optimal"
  },

  "executionMode": "Synchronous | Asynchronous | Hybrid",
  "exchangeArchetype": "Mentorship | SkillSwap | ExecutionExchange | StrategicAlliance",

  "trustReadiness": "Low | Medium | High",
  "ecosystemLeverage": "Low | Medium | High",

  "reputationDelta": {
    "providerGain": number,
    "requesterGain": number,
    "decayRisk": number | null
  }
}
`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          exchangeStrategy: { type: Type.STRING },

          settlementPathways: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },

          estimatedValue: {
            type: Type.OBJECT,
            properties: {
              tier: { type: Type.STRING },
              units: { type: Type.STRING },
              rationale: { type: Type.STRING },
            },
            required: ["tier", "rationale"],
          },

          recommendedDuration: { type: Type.STRING },

          skillDomain: { type: Type.STRING },
          competencyAlignment: { type: Type.STRING },

          complementarySkills: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },

          trustTier: { type: Type.STRING },
          settlementMode: { type: Type.STRING },
          arbitrationRequired: { type: Type.BOOLEAN },

          riskProfile: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                risk: { type: Type.STRING },
                severity: { type: Type.STRING },
                mitigation: { type: Type.STRING },
              },
              required: ["risk", "severity", "mitigation"],
            },
          },

          impactScore: {
            type: Type.OBJECT,
            properties: {
              value: { type: Type.NUMBER },
              classification: { type: Type.STRING },
            },
            required: ["value", "classification"],
          },

          valueMatchIndex: {
            type: Type.OBJECT,
            properties: {
              ratio: { type: Type.NUMBER },
              classification: { type: Type.STRING },
            },
            required: ["ratio", "classification"],
          },

          executionMode: { type: Type.STRING },
          exchangeArchetype: { type: Type.STRING },

          trustReadiness: { type: Type.STRING },
          ecosystemLeverage: { type: Type.STRING },

          reputationDelta: {
            type: Type.OBJECT,
            properties: {
              providerGain: { type: Type.NUMBER },
              requesterGain: { type: Type.NUMBER },
              decayRisk: { type: Type.NUMBER },
            },
            required: ["providerGain", "requesterGain"],
          },
        },
        required: [
          "exchangeStrategy",
          "settlementPathways",
          "estimatedValue",
          "recommendedDuration",
          "skillDomain",
          "competencyAlignment",
          "complementarySkills",
          "trustTier",
          "settlementMode",
          "arbitrationRequired",
          "riskProfile",
          "impactScore",
          "valueMatchIndex",
          "executionMode",
          "exchangeArchetype",
          "trustReadiness",
          "ecosystemLeverage",
          "reputationDelta",
        ],
      },
    },
  });

  const text = response.text || "{}";
  return JSON.parse(text) as BarterMatchResult;
};
