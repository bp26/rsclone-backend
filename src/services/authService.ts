import jwtHandler from '../jwt/jwtHandler.js';
import User from '../models/userModel.js';
import CustomError from '../utils/customError.js';
import { StatusCode } from '../types/enums.js';
import { ResponceMessage } from '../types/enums.js';
import { IAuthUser } from '../types/interfaces.js';

class AuthService {
  async register(login: string, password: string): Promise<IAuthUser> {
    const user = await User.findOne({ login });
    if (user) {
      throw new CustomError(
        StatusCode.CONFLICT,
        ResponceMessage.USER_ALREADY_EXISTS
      );
    }
    const newUser = await User.create({ login, password });
    const token = jwtHandler.generateToken(newUser);
    return {
      userId: newUser.id,
      token,
    };
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
      userId: user.id,
      token,
    };
  }

  async verifyAuthentication(token: string, id: string): Promise<void> {
    jwtHandler.checkToken(token);
    const user = await User.findById(id);
    if (!user) {
      throw new CustomError(
        StatusCode.UNAUTHORIZED,
        ResponceMessage.USER_DOESNT_EXIST
      );
    }
  }
}

export default new AuthService();
