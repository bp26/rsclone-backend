import express from 'express';
import { createServer } from 'http';
import authRouter from './routers/authRouter.js';
import { StatusCode, ResponceMessage } from './types/enums.js';

const app = express();

app.use(express.json());

app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.status(+StatusCode.OK).send(ResponceMessage.WELCOME);
});

const server = createServer(app);

export default server;
