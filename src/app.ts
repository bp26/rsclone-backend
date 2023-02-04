import express from 'express';
import authRouter from './routers/authRouter';
import { StatusCode, ResponceMessage } from './types/enums';

const app = express();

app.use(express.json());

app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.status(+StatusCode.OK).send(ResponceMessage.WELCOME);
});

export default app;
