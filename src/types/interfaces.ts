import { MessageType } from './enums';
import { Types } from 'mongoose';

export interface IUser {
  login: string;
  password: string;
  coins: number;
  lessons: string[];
  chat?: IChatSettings;
  avatar?: IAvatar;
}

export interface IAvatar {
  secure_url: string;
  public_id: string;
}

interface IChatSettings {
  color: string;
  notifications: boolean;
}

export interface IAuthUser {
  userId: string;
  token: string;
}

export interface IMessage {
  user: Types.ObjectId;
  content: string;
  time: string;
}

export interface ISavedMessage {
  user: string;
  color: string;
  content: string;
  time: string;
}

export interface IMessageData {
  type: MessageType;
  data: ISavedMessage;
}

export interface INotification {
  user: string;
  color: string;
}

export interface INotificationData {
  type: MessageType;
  data: INotification;
}
