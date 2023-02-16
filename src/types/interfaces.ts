import { MessageType } from './enums';

export interface IUser {
  login: string;
  password: string;
  coins: number;
  lessons: string[];
}

export interface IAuthUser {
  userId: string;
  token: string;
}

export interface IMessage {
  user: string;
  content: string;
}

export interface IMessageData {
  type: MessageType;
  data: IMessage;
}

export interface INotification {
  user: string;
}

export interface INotificationData {
  type: MessageType;
  data: INotification;
}
