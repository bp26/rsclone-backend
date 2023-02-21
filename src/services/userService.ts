import User from '../models/userModel.js';
import { IAvatar, IUser } from '../types/interfaces.js';
import CustomError from '../utils/customError.js';
import { ErrorType, StatusCode } from '../types/enums.js';
import { ResponceMessage } from '../types/enums.js';
import cloudinary from '../fileUpload/cloudinary.js';

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

  async uploadAvatar(id: string, file: Express.Multer.File): Promise<IUser> {
    const user = await this.getUser(id);
    const public_id = user.avatar!.public_id;

    if (public_id) {
      await cloudinary.uploader.destroy(public_id);
    }

    const result: IAvatar = await cloudinary.uploader.upload(file.path);
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { avatar: result },
      { new: true }
    );

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
