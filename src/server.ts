import express from 'express';
import { createServer } from 'http';
import cookieParser from 'cookie-parser';
import authRouter from './routers/authRouter.js';
import chatRouter from './routers/chatRouter.js';
import userRouter from './routers/userRouter.js';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRouter);
app.use('/chat', chatRouter);
app.use('/user', userRouter);

const server = createServer(app);

export default server;
