const express = require('express');
const { getCocktails} = require('../controllers/controllers');

const router = express.Router();

// Route for '/'
router.get('/', (req, res) => {
    res.send("backend is working");
});
// router.get('/api', (req, res) => {
//     res.send("api is working");
// });

// Route for '/api'
router.get('/api', getCocktails);

module.exports = router;
