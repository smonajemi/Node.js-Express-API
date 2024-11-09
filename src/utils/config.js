import dotenv from 'dotenv';
dotenv.config();

const config = {
  openAiApiKey: process.env.OPENAI_API_KEY,
  openAiApiUrl: process.env.OPENAI_API_URL,
  apiUrl: process.env.API_URL,
  apiKeyFirst: process.env.API_KEY_FIRST,
  apiKeySecond: process.env.API_KEY_SECOND,
  apiKeyDefault: process.env.API_KEY_DEFAULT
};

export default config;
