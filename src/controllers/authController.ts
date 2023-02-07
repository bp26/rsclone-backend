import { Request, Response } from 'express';
import authService from '../services/authService.js';
import { AUTH_ID, AUTH_TOKEN } from '../utils/constants.js';
import { handleError } from '../utils/errorHandler.js';
import { setAuthCookies } from '../utils/cookieHelper.js';

class AuthController {
  async register(req: Request, res: Response): Promise<void> {
    try {
      const { login, password } = req.body;
      const newUser = await authService.register(login, password);
      setAuthCookies(res, newUser.userId, newUser.token);
    } catch (error) {
      handleError(res, error);
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { login, password } = req.body;
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
