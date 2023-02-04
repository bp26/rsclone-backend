import jwtHandler from '../jwt/jwtHandler.js';
import User from '../models/userModel.js';
import CustomError from '../utils/customError.js';
import { StatusCode } from '../types/enums.js';
import { ResponceMessage } from '../types/enums.js';
import { IAuthUser, IUser } from '../types/interfaces.js';

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

  async deleteUsers(): Promise<void> {
    await User.deleteMany({});
  }
}

export default new AuthService();
