const axios = require('axios');
const config = require('../utils/config');
require('dotenv').config();

const fetchWithApiKey = async (apiKey, name) => {
  try {
    const response = await axios.get(config.apiUrl, {
      headers: {
        'X-Api-Key': apiKey
      },
      params: { name }
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.error || 'An unexpected error occurred';
    console.error(`Error fetching data with API key ${apiKey}: ${errorMessage}`);
    return null;
  }
};

const fetchCocktailData = async (name) => {
  const apiKeys = [config.apiKeyFirst, config.apiKeySecond, config.apiKeyDefault];
  let data = null;

  for (const key of apiKeys) {
    data = await fetchWithApiKey(key, name);
    if (data) {
      return data;
    }
  }

  throw new Error('Failed to fetch cocktail data with all API keys.');
};

const fetchOpenAiData = async (prompt) => {
  try {
    const response = await axios.post(
      config.openAiApiUrl,
      {
        model: 'text-davinci-003',
        prompt,
        max_tokens: 150
      },
      {
        headers: {
          'Authorization': `Bearer ${config.openAiApiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data from OpenAI:', error);
    throw error;
  }
};
module.exports = { fetchCocktailData, fetchOpenAiData };
