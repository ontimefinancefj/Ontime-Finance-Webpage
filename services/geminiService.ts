
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getFinancialTip = async (amount: number, purpose: string): Promise<string> => {
  if (!API_KEY) return "Remember to borrow only what you can afford to repay.";

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a friendly financial advisor for 'Ontime Finance' in Suva, Fiji. 
      A customer is looking to borrow FJ$${amount} for ${purpose}. 
      Give one short, encouraging, and practical financial tip (max 2 sentences) specific to the context of Fiji's economy or local lifestyle.`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 100,
      },
    });

    return response.text || "Financial health starts with a plan. We're here to help!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Budgeting is the key to financial freedom. Always plan ahead.";
  }
};
