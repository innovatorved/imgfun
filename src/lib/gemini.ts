import { GoogleGenerativeAI } from "@google/generative-ai";
import { AI_CONTEXT, API_KEY, MODEL_NAME, generationConfig } from "./constant";
import { safetySettings, safetySettingsStrict } from "./safety";

import fs from "fs";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: MODEL_NAME });

export const makeFunOFImage = async (imgFileName: string) => {
  const parts = [
    { text: AI_CONTEXT },
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: Buffer.from(fs.readFileSync(imgFileName)).toString("base64"),
      },
    },
  ];

  const result = await model.generateContent({
    contents: [{ role: "user", parts }],
    generationConfig: generationConfig,
    safetySettings: safetySettingsStrict,
  });

  return result.response.text();
};
