import { fetchCocktailData, fetchOpenAiData } from '../services/services.js';

const getCocktails = async (req, res) => {
    const { name } = req.query; // Get the cocktail name from the query string
    if (!name) {
      return res.status(400).json({ message: 'Cocktail name is required' });
    }
    try {
      const data = await fetchCocktailData(name);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching cocktail data from API' });
    }
};

const getOpenAiData = async (req, res) => {
    const { prompt } = req.query; // Get the prompt from the query string
    if (!prompt) {
      return res.status(400).json({ message: 'Prompt is required' });
    }
    try {
      const data = await fetchOpenAiData(prompt);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching data from OpenAI API' });
    }
};

export { getCocktails, getOpenAiData };
