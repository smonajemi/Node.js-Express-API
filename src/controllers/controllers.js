const { fetchCocktailData } = require('../services/services');

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
  }
  
  module.exports = { getCocktails };