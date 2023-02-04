import { IMessage } from '../types/interfaces.js';
import Message from '../models/messageModel.js';

class ChatService {
  async getMessages(): Promise<IMessage[]> {
    const messages = await Message.find({});
    return messages;
  }

  async deleteMessages(): Promise<void> {
    await Message.deleteMany({});
  }

  async saveMessage(message: IMessage): Promise<void> {
    await Message.create(message);
  }
}

export default new ChatService();
