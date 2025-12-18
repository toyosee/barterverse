import { GoogleGenAI, Type } from "@google/genai";
import type { BarterMatchResult } from "../../types";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GOOGLE_API_KEY || 'fallback_api_key'
});

export const getBarterAdvice = async (
  haveSkill: string,
  wantSkill: string
): Promise<BarterMatchResult> => {
  const prompt = `Act as an expert knowledge-exchange consultant for Barterverse.
  A user has the skill: "${haveSkill}" and wants to acquire the skill: "${wantSkill}".
  Provide a detailed barter strategy for this exchange.
  Focus on the 'Universe of Exchange' concept where money is replaced by mutual growth.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          exchangeStrategy: { type: Type.STRING },
          potentialPathways: { type: Type.ARRAY, items: { type: Type.STRING } },
          estimatedValue: { type: Type.STRING },
          recommendedDuration: { type: Type.STRING }
        },
        required: ["exchangeStrategy", "potentialPathways", "estimatedValue", "recommendedDuration"]
      }
    }
  });

  const text = response.text || '{}';
  return JSON.parse(text) as BarterMatchResult;
};