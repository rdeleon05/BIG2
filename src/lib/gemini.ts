import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const analyzeImage = async (base64Data: string, mimeType: string) => {
  const result = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: [
      {
        parts: [
          { inlineData: { data: base64Data, mimeType } },
          { text: "Analyze this image in the context of investment, shipping, or agriculture in Panama. What opportunities do you see?" }
        ]
      }
    ]
  });
  return result.text;
};
