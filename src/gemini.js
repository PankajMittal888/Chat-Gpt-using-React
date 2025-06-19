// // geminiApi.js (ESM version, works with React + Vite)

// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({
//   apiKey: "AIzaSyBbY_pt-3QNV54K7ZWYV89eLEvozYKy4no", // Don't expose in production!
// });

// // Use free-tier model to avoid quota errors
// const model = "gemini-1.5-flash";

// const config = {
//   responseMimeType: "text/plain",
// };

// async function getGeminiResponse(prompt) {
//   try {
//     const contents = [
//       {
//         role: "user",
//         parts: [{ text: prompt }],
//       },
//     ];

//     const response = await ai.models.generateContentStream({
//       model,
//       config,
//       contents,
//     });

//     let result = "";
//     for await (const chunk of response) {
//       result += chunk.text;
//     }

//     console.log("✅ Gemini Response:", result);
//     return result;

//   } catch (error) {
//     console.error("❌ Gemini API Error:", error.message);
//     return `Error: ${error.message}`;
//   }
// }

// export default getGeminiResponse;


import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

const model = "gemini-1.5-flash";

const config = {
  responseMimeType: "text/plain",
};

async function getGeminiResponse(prompt) {
  try {
    const contents = [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ];

    const response = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });

    let result = "";
    for await (const chunk of response) {
      result += chunk.text;
    }

    return result;

  } catch (error) {
    return `Error: ${error.message}`;
  }
}

export default getGeminiResponse;
