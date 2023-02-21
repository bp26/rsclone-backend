import {
  IMessage,
  INotification,
  ISavedMessage,
  IUser,
} from '../types/interfaces.js';
import Message from '../models/messageModel.js';
import { setDate } from '../utils/setDate.js';
import userService from './userService.js';

class ChatService {
  async getMessages(): Promise<ISavedMessage[]> {
    const messages = await Message.find({}).populate<{ user: IUser }>('user');
    return messages.map((message) => {
      return {
        user: message.user.login,
        color: message.user.chat!.color,
        content: message.content,
        time: message.time,
      };
    });
  }

  async saveMessage(message: Omit<IMessage, 'time'>): Promise<ISavedMessage> {
    const savedMessage = await Message.create({
      user: message.user,
      content: message.content,
      time: setDate(),
    });
    const populatedMessage = await savedMessage.populate<{ user: IUser }>(
      'user'
    );
    return {
      user: populatedMessage.user.login,
      color: populatedMessage.user.chat!.color,
      content: populatedMessage.content,
      time: populatedMessage.time,
    };
  }

  async getUserNotification(
    notification: Omit<INotification, 'color'>
  ): Promise<INotification> {
    const user = await userService.getUser(notification.user);
    return {
      user: user.login,
      color: user.chat!.color,
    };
  }
}

export default new ChatService();
