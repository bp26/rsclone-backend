import { Request, Response } from 'express';
import authService from '../services/authService';
import { StatusCode } from '../types/enums';
import { handleError } from '../utils/errorHandler';

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
      res.status(200).send(authUser);
    } catch (error) {
      handleError(res, error);
    }
  }
}

export default new AuthController();
