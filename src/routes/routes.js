import express from 'express';
import { createUserController } from '../controllers/controllers.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Route for '/'
router.get('/', (req, res) => {
    res.send("backend is working");
});

router.post('/users', authMiddleware, createUserController);



export default router;
