import express from 'express';
import chatController from '../controllers/chatController.js';

const chatRouter = express.Router();

chatRouter.get('/messages', chatController.getMessages);

export default chatRouter;
