import { Request, Response } from 'express';
import userService from '../services/userService.js';
import { ResponceMessage, StatusCode } from '../types/enums.js';
import { AUTH_ID } from '../utils/constants.js';
import CustomError from '../utils/customError.js';
import { handleError } from '../utils/errorHandler.js';

class UserController {
  async getUser(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.cookies[AUTH_ID];
      if (!userId) {
        throw new CustomError(
          StatusCode.UNAUTHORIZED,
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
        throw new CustomError(StatusCode.BAD_REQUEST, ResponceMessage.NO_PROPS);
      }
      if (!userId) {
        throw new CustomError(
          StatusCode.UNAUTHORIZED,
          ResponceMessage.UNAUTHORIZED
        );
      }
      const updatedUser = await userService.updateUser(userId, user);
      res.status(+StatusCode.OK).send(updatedUser);
    } catch (error) {
      handleError(res, error);
    }
  }
}

export default new UserController();
