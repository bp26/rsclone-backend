import { Request, Response } from 'express';
import authService from '../services/authService.js';
import { StatusCode } from '../types/enums.js';
import { AUTH_COOKIE } from '../utils/constants.js';
import { handleError } from '../utils/errorHandler.js';

class AuthController {
  async register(req: Request, res: Response): Promise<void> {
    try {
      const { login, password } = req.body;
      const newUser = await authService.register(login, password);
      res.status(+StatusCode.OK).send(newUser);
    } catch (error) {
      handleError(res, error);
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { login, password } = req.body;
      const authUser = await authService.login(login, password);
      res.cookie(AUTH_COOKIE, authUser.token);
      res.status(+StatusCode.OK).send(authUser.user);
    } catch (error) {
      handleError(res, error);
    }
  }

  async getUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await authService.getUsers();
      res.status(+StatusCode.OK).send(users);
    } catch (error) {
      handleError(res, error);
    }
  }

  async deleteUsers(req: Request, res: Response): Promise<void> {
    try {
      await authService.deleteUsers();
      res.sendStatus(+StatusCode.OK);
    } catch (error) {
      handleError(res, error);
    }
  }
}

export default new AuthController();
