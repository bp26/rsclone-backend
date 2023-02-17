import { IMessage } from '../types/interfaces.js';
import Message from '../models/messageModel.js';
import { setDate } from '../utils/setDate.js';

class ChatService {
  async getMessages(): Promise<IMessage[]> {
    const messages = await Message.find({});
    return messages;
  }

  async saveMessage(message: Omit<IMessage, 'time'>): Promise<IMessage> {
    return await Message.create({
      user: message.user,
      content: message.content,
      time: setDate(),
    });
  }
}

export default new ChatService();
