import { Request, Response } from 'express';
import userService from '../services/userService.js';
import { ErrorType, ResponceMessage, StatusCode } from '../types/enums.js';
import { AUTH_ID } from '../utils/constants.js';
import CustomError from '../utils/customError.js';
import { handleError } from '../utils/handleError.js';

class UserController {
  async getUser(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.cookies[AUTH_ID];
      if (!userId) {
        throw new CustomError(
          StatusCode.UNAUTHORIZED,
          ErrorType.AUTH,
          ResponceMessage.UNAUTHORIZED
        );
      }
      const user = await userService.getUser(userId);
      res.status(+StatusCode.OK).send(user);
    } catch (error) {
      handleError(res, error);
    }
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const user = req.body;
      const userId = req.cookies[AUTH_ID];
      if (!user) {
        throw new CustomError(
          StatusCode.BAD_REQUEST,
          ErrorType.CLIENT,
          ResponceMessage.NO_PROPS
        );
      }
      if (!userId) {
        throw new CustomError(
          StatusCode.UNAUTHORIZED,
          ErrorType.AUTH,
          ResponceMessage.UNAUTHORIZED
        );
      }
      const updatedUser = await userService.updateUser(userId, user);
      res.status(+StatusCode.OK).send(updatedUser);
    } catch (error) {
      handleError(res, error);
    }
  }

  public async uploadAvatar(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.cookies[AUTH_ID];
      const file = req.file;

      if (!userId) {
        throw new CustomError(
          StatusCode.UNAUTHORIZED,
          ErrorType.AUTH,
          ResponceMessage.UNAUTHORIZED
        );
      }
      if (!file) {
        throw new CustomError(
          StatusCode.BAD_REQUEST,
          ErrorType.CLIENT,
          ResponceMessage.NO_FILE_UPLOADED
        );
      }

      const user = await userService.uploadAvatar(userId, file);
      res.status(+StatusCode.OK).send(user);
    } catch (error) {
      console.log(error);
      handleError(res, error);
    }
  }
}

export default new UserController();
