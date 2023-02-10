import { Request, Response } from 'express';
import authService from '../services/authService.js';
import { AUTH_ID, AUTH_TOKEN } from '../utils/constants.js';
import { handleError } from '../utils/handleError.js';
import { setAuthCookies } from '../utils/setAuthCookies.js';
import CustomError from '../utils/customError.js';
import { StatusCode, ResponceMessage } from '../types/enums.js';

class AuthController {
  async register(req: Request, res: Response): Promise<void> {
    try {
      const { login, password } = req.body;
      if (!login || !password) {
        throw new CustomError(StatusCode.BAD_REQUEST, ResponceMessage.NO_PROPS);
      }
      const newUser = await authService.register(login, password);
      setAuthCookies(res, newUser.userId, newUser.token);
    } catch (error) {
      handleError(res, error);
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { login, password } = req.body;
      if (!login || !password) {
        throw new CustomError(StatusCode.BAD_REQUEST, ResponceMessage.NO_PROPS);
      }
      const authUser = await authService.login(login, password);
      setAuthCookies(res, authUser.userId, authUser.token);
    } catch (error) {
      handleError(res, error);
    }
  }

  async verifyAuthentication(req: Request, res: Response): Promise<void> {
    try {
      const token = req.cookies[AUTH_TOKEN];
      const id = req.cookies[AUTH_ID];
      if (!token || !id) {
        throw new CustomError(
          StatusCode.UNAUTHORIZED,
          ResponceMessage.UNAUTHORIZED
        );
      }
      await authService.verifyAuthentication(token, id);
      res.send(true);
    } catch (error) {
      res.send(false);
    }
  }

  logout(req: Request, res: Response): void {
    setAuthCookies(res, '', '');
  }
}

export default new AuthController();
