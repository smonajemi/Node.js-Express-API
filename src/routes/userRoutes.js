import express from 'express';
import { createUser, getUser } from '../controllers/userController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/users', createUser);
router.get('/users/:id', authenticate, getUser);

export default router;
