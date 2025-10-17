import { GoogleGenAI } from "@google/genai";

// 환경 변수 GEMINI API KEY
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// AI 객체 생성
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// AI Chat 객체 생성
const chat = ai.chats.create({
  model: "gemini-2.5-flash",
});

const config = {
  responseMimeType: "application/json", // 응답 형식(확장자)
  // responseJsonSchema: responseSchema, // 응답 JSON 구조
  // systemInstruction: systemInstruction,
};

export { ai, chat, config };
