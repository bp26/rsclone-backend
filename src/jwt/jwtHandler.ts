import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config.js';
import { ErrorType, ResponceMessage, StatusCode } from '../types/enums.js';
import { IUser } from '../types/interfaces.js';
import { AUTH_TOKEN } from '../utils/constants.js';
import CustomError from '../utils/customError.js';

class jwtHandler {
  generateToken(user: IUser): string {
    const { login, password } = user;
    const payload = {
      login,
      password,
    };
    return jwt.sign(payload, SECRET_KEY);
  }

  verifyTokenOnRequest(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies[AUTH_TOKEN];
    if (!token || typeof token !== 'string') {
      return res
        .status(+StatusCode.UNAUTHORIZED)
        .send({ type: ErrorType.AUTH, message: ResponceMessage.USER_NO_TOKEN });
    }
    jwt.verify(token, SECRET_KEY, (err) => {
      if (err) {
        res
          .status(+StatusCode.UNAUTHORIZED)
          .send({ type: ErrorType.AUTH, message: ResponceMessage.WRONG_TOKEN });
      } else {
        next();
      }
    });
  }

  checkToken(token: string): void {
    jwt.verify(token, SECRET_KEY, (err) => {
      if (err) {
        throw new CustomError(
          StatusCode.UNAUTHORIZED,
          ErrorType.AUTH,
          ResponceMessage.WRONG_TOKEN
        );
      }
    });
  }
}

export default new jwtHandler();
