import express from 'express';
import cors from 'cors';
import routes from './routes/routes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', routes);
app.use('/api', userRoutes);

app.use(errorHandler);

export default app;
