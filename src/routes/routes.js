import express from 'express';
import { getCocktails, getOpenAiData } from '../controllers/controllers.js';

const router = express.Router();

// Route for '/'
router.get('/', (req, res) => {
    res.send("backend is working");
});

// Route for '/api'
router.get('/api', getCocktails);

// Route for '/ai'
router.get('/ai', getOpenAiData);

export default router;
