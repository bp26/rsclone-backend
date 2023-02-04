import express from 'express';
import chatController from '../controllers/chatController.js';
import jwtHandler from '../jwt/jwtHandler.js';

const chatRouter = express.Router();

chatRouter.get('/messages', chatController.getMessages);
chatRouter.delete(
  '/messages',
  jwtHandler.checkToken,
  chatController.deleteMessages
);

export default chatRouter;
