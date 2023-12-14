export const MODEL_NAME = "gemini-pro-vision";
export const API_KEY = process.env.MAKERSUITE_API_KEY ?? "";

export const generationConfig = {
  temperature: 0.4,
  topK: 32,
  topP: 1,
  maxOutputTokens: 4096,
};

export const AI_CONTEXT =
  "you are a funVocal tool your task is to just make a fun of image given to you. so everyone can laugh after reading it";
