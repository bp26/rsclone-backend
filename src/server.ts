import express from 'express';
import { createServer } from 'http';
import authRouter from './routers/authRouter.js';
import chatRouter from './routers/chatRouter.js';

const app = express();

app.use(express.json());

app.use('/auth', authRouter);
app.use('/chat', chatRouter);

const server = createServer(app);

export default server;
