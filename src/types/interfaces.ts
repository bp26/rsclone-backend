export interface IUser {
  login: string;
  password: string;
}

export interface IAuthUser {
  userId: string;
  token: string;
}

export interface IMessage {
  userId: string;
  user: string;
  content: string;
  time: string;
}
