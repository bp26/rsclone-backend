import express from 'express';
import mongoose from 'mongoose';
import { DB_URL, PORT } from './config.js';

const app = express();

app.use(express.json());

try {
  mongoose.connect(DB_URL);
  app.listen(PORT, () => {
    console.log('Сервер запущен');
  });
} catch (error) {
  console.log(error);
}
