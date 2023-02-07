import { Request, Response } from 'express';
import chatService from '../services/chatService.js';
import { StatusCode } from '../types/enums.js';
import { handleError } from '../utils/errorHandler.js';

class ChatController {
  async getMessages(req: Request, res: Response): Promise<void> {
    try {
      const messages = await chatService.getMessages();
      res.status(+StatusCode.OK).send(messages);
    } catch (error) {
      handleError(res, error);
    }
  }
}

export default new ChatController();
