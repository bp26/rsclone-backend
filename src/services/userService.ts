import User from '../models/userModel.js';
import { IUser } from '../types/interfaces.js';
import CustomError from '../utils/customError.js';
import { ErrorType, StatusCode } from '../types/enums.js';
import { ResponceMessage } from '../types/enums.js';

class UserService {
  async getUser(id: string): Promise<IUser> {
    const user = await User.findById(id);
    if (!user) {
      throw new CustomError(
        StatusCode.UNAUTHORIZED,
        ErrorType.AUTH,
        ResponceMessage.USER_DOESNT_EXIST
      );
    }
    return user;
  }

  async updateUser(id: string, user: IUser): Promise<IUser> {
    const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
    if (!updatedUser) {
      throw new CustomError(
        StatusCode.UNAUTHORIZED,
        ErrorType.AUTH,
        ResponceMessage.USER_DOESNT_EXIST
      );
    }
    return updatedUser;
  }
}

export default new UserService();
