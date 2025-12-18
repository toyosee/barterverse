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
You are an expert knowledge-exchange consultant in the Barterverse ecosystem.

User profile:
- Skill offered: "${haveSkill}"
- Skill desired: "${wantSkill}"

Task:
Analyze this barter opportunity and provide a structured strategy based on the "Universe of Exchange" concept, where money is replaced by mutual growth.

Return your answer strictly as JSON with the following fields:
{
  "exchangeStrategy": "Clear narrative of how the barter should work",
  "potentialPathways": ["Step-by-step pathways for achieving the exchange"],
  "estimatedValue": "Relative value of this exchange in the ecosystem",
  "recommendedDuration": "Suggested timeframe for the barter",
  "skillCategory": "Domain classification of the skills",
  "skillLevelMatch": "Assessment of level compatibility (beginner/intermediate/advanced)",
  "complementarySkills": ["Other skills that could enhance the exchange"],
  "riskFactors": ["Potential challenges or mismatches"],
  "impactScore": "Numeric or qualitative score of ecosystem impact"
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
          potentialPathways: { type: Type.ARRAY, items: { type: Type.STRING } },
          estimatedValue: { type: Type.STRING },
          recommendedDuration: { type: Type.STRING },
          skillCategory: { type: Type.STRING },
          skillLevelMatch: { type: Type.STRING },
          complementarySkills: { type: Type.ARRAY, items: { type: Type.STRING } },
          riskFactors: { type: Type.ARRAY, items: { type: Type.STRING } },
          impactScore: { type: Type.STRING },
        },
        required: [
          "exchangeStrategy",
          "potentialPathways",
          "estimatedValue",
          "recommendedDuration",
          "skillCategory",
          "skillLevelMatch",
          "complementarySkills",
          "riskFactors",
          "impactScore",
        ],
      },
    },
  });

  const text = response.text || "{}";
  return JSON.parse(text) as BarterMatchResult;
};