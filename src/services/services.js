import axios from 'axios';
import config from '../utils/config.js';
import dotenv from 'dotenv';

dotenv.config();

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

const fetchOpenAiData = async () => {
  try {
    const prompt = `
      Generate a response about a Negroni cocktail that includes:
      - An image of a Negroni cocktail.
      - A brief description of its flavor profile.
      - A recipe that uses ounces (oz) measurements, with a rich syrup proportion set such that if citrus content is 1 oz, the rich syrup should be 0.35 oz.
      Output format:
      {
        "image": "URL of the Negroni image",
        "description": "Brief flavor profile of the Negroni",
        "recipe": [
          { "ingredient": "Gin", "amount": "1 oz" },
          { "ingredient": "Campari", "amount": "1 oz" },
          { "ingredient": "Sweet Vermouth", "amount": "1 oz" },
          { "ingredient": "Rich Syrup", "amount": "calculated based on citrus if included" }
        ]
      }
    `;

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
    console.error(`Error fetching data from OpenAI:`, error);
    throw error;
  }
};

export { fetchCocktailData, fetchOpenAiData };
