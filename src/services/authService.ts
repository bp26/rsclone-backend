import jwtHandler from '../jwt/jwtHandler';
import User from '../models/userModel';
import CustomError from '../utils/customError';
import { StatusCode } from '../types/enums';
import { ResponceMessage } from '../types/enums';
import { IAuthUser, IUser } from '../types/interfaces';

class AuthService {
  async register(login: string, password: string): Promise<IUser> {
    const user = await User.findOne({ login });
    if (user) {
      throw new CustomError(
        StatusCode.CONFLICT,
        ResponceMessage.USER_ALREADY_EXISTS
      );
    }
    const newUser = await User.create({ login, password });
    return newUser;
  }

  async login(login: string, password: string): Promise<IAuthUser> {
    const user = await User.findOne({ login });
    if (!user) {
      throw new CustomError(
        StatusCode.UNAUTHORIZED,
        ResponceMessage.USER_DOESNT_EXIST
      );
    }
    if (password !== user.password) {
      throw new CustomError(
        StatusCode.UNAUTHORIZED,
        ResponceMessage.USER_WRONG_PASSWORD
      );
    }
    const token = jwtHandler.generateToken(user);
    return {
      user,
      token,
    };
  }

  async getUsers(): Promise<IUser[]> {
    const users = await User.find({});
    return users;
  }
}

export default new AuthService();
