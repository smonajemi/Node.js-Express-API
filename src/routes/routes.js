import express from 'express';

const router = express.Router();

// Route for '/'
router.get('/', (req, res) => {
    res.send("backend is working");
});




export default router;
