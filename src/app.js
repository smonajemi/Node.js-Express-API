import express from 'express';
import cors from 'cors';
import routes from './routes/routes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', routes);

export default app;
