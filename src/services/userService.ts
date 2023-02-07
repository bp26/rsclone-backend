import User from '../models/userModel';
import { IUser } from '../types/interfaces';
import CustomError from '../utils/customError';
import { StatusCode } from '../types/enums';
import { ResponceMessage } from '../types/enums';

class UserService {
  async getUser(id: string): Promise<IUser> {
    const user = await User.findById(id);
    if (!user) {
      throw new CustomError(
        StatusCode.UNAUTHORIZED,
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
        ResponceMessage.USER_DOESNT_EXIST
      );
    }
    return updatedUser;
  }
}

export default new UserService();
