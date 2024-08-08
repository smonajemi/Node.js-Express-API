const axios = require('axios');

// Replace with the actual API key and endpoint
const API_URL = 'https://api.api-ninjas.com/v1/cocktail';
const API_KEY = 'nJpFxmc48ILJGb1lF+OSFg==YRfvDbcbxyB3QNMY';

async function fetchCocktailData(name) {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'X-Api-Key': API_KEY
      },
      params: {
        name: name
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data from cocktail API:', error);
    throw error;
  }
}

module.exports = { fetchCocktailData };
