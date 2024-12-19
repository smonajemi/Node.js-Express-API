import dotenv from 'dotenv';
dotenv.config();

const config = {
  openAiApiKey: process.env.OPENAI_API_KEY,
  openAiApiUrl: process.env.OPENAI_API_URL,
  apiUrl: process.env.API_URL,
  apiKeyFirst: process.env.API_KEY_FIRST,
  apiKeySecond: process.env.API_KEY_SECOND,
  apiKeyDefault: process.env.API_KEY_DEFAULT,

  // Database configuration
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,

  // JWT configuration
  jwtSecret: process.env.JWT_SECRET,

  // Server port
  port: process.env.PORT || 3000,
};

export default config;
