import express from 'express';
import mongoose from 'mongoose';
import { DB_URL, PORT } from './config.js';
import AuthRouter from './routers/authRouter.js';

const app = express();

app.use(express.json());

app.use('/auth', AuthRouter);

try {
  mongoose.connect(DB_URL);
  app.listen(PORT, () => {
    console.log('Сервер запущен');
  });
} catch (error) {
  console.log(error);
}
