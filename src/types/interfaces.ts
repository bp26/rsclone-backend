export interface IUser {
  login: string;
  password: string;
}

export interface IAuthUser {
  user: IUser;
  token: string;
}
