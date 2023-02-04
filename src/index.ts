import express from 'express';
import mongoose from 'mongoose';
import { DB_URL, PORT } from './config.js';
import AuthRouter from './routers/authRouter.js';
import { StatusCode } from './types/enums.js';

export const app = express();

app.use(express.json());

app.use('/auth', AuthRouter);

app.get('/', (req, res) => {
  res.status(+StatusCode.OK).send('Welcome!');
});

try {
  mongoose.connect(DB_URL);
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
} catch (error) {
  console.log(error);
}
