import express, { Application } from 'express';
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';
import habitRoutes from './routes/habit.routes';

const app: Application = express();

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use("/api", habitRoutes);

export default app;
