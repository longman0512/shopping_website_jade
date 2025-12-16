import { GoogleGenAI, Type } from "@google/genai";
import { Product } from "../types";

// Helper to get a deterministic random image based on a seed string
const getMockImage = (seed: string) => {
  const hash = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return `https://picsum.photos/600/600?random=${hash % 1000}`;
};

export const getAIRecommendations = async (query: string): Promise<Product[]> => {
  if (!process.env.API_KEY) {
    console.warn("API Key not found. Returning mock data.");
    return [];
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `User is searching for: "${query}". 
      Generate a list of 4 specific, high-quality product recommendations for a UK-based general store called 'Jade' (Modeled after Google Store style but selling everything).
      
      The store sells: Electronics, Smart Home, Home & Garden, Health & Beauty, Sports, Toys, Auto, Office, Groceries, Pets, Hobbies.
      
      Currency should be implicitly GBP (User will handle formatting).
      They should look like clean, premium products.
      For the image field, just return a relevant keyword I can use for a seed.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              name: { type: Type.STRING },
              price: { type: Type.NUMBER },
              category: { type: Type.STRING },
              description: { type: Type.STRING },
              rating: { type: Type.NUMBER },
              imageKeyword: { type: Type.STRING }
            },
            required: ["id", "name", "price", "category", "description", "rating", "imageKeyword"]
          }
        }
      }
    });

    const data = JSON.parse(response.text || "[]");
    
    // Transform the data to match our Product interface (adding images)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map((item: any) => ({
      ...item,
      image: getMockImage(item.imageKeyword || item.name),
      isNew: Math.random() > 0.8
    }));

  } catch (error) {
    console.error("Gemini API Error:", error);
    return [];
  }
};