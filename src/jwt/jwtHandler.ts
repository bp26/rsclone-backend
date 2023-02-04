import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config.js';
import { ResponceMessage, StatusCode } from '../types/enums.js';
import { IUser } from '../types/interfaces.js';

class jwtHandler {
  generateToken(user: IUser): string {
    const { login, password } = user;
    const payload = {
      login,
      password,
    };
    return jwt.sign(payload, SECRET_KEY);
  }

  checkToken(req: Request, res: Response, next: NextFunction) {
    const header = req.headers['authorization'];
    if (!header || typeof header !== 'string') {
      return res
        .status(+StatusCode.UNAUTHORIZED)
        .send({ message: ResponceMessage.USER_NO_TOKEN });
    }
    const token = header.split(' ')[1];
    jwt.verify(token, SECRET_KEY, (err) => {
      if (err) {
        res
          .status(+StatusCode.UNAUTHORIZED)
          .send({ message: ResponceMessage.WRONG_TOKEN });
      } else {
        next();
      }
    });
  }
}

export default new jwtHandler();
