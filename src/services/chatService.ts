import { IMessage } from '../types/interfaces.js';
import Message from '../models/messageModel.js';
import { setDate } from '../utils/setDate.js';

class ChatService {
  async getMessages(): Promise<IMessage[]> {
    const messages = await Message.find({});
    return messages;
  }

  async saveMessage(message: Omit<IMessage, 'time'>): Promise<IMessage> {
    const time = setDate();
    const { user, content } = message;
    console.log(time, user, content);
    return await Message.create({
      user,
      content,
      time,
    });
  }
}

export default new ChatService();
