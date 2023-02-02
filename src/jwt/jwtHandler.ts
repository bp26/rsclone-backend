import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config';
import { ResponceMessage, StatusCode } from '../types/enums';
import { IUser } from '../types/interfaces';

class jwtHandler {
  generateToken(user: IUser): string {
    return jwt.sign(user, SECRET_KEY);
  }

  checkToken(req: Request, res: Response, next: NextFunction) {
    const header = req.headers['auth'];
    if (!header || typeof header === 'string') {
      return res
        .status(+StatusCode.UNAUTHORIZED)
        .send({ message: ResponceMessage.USER_NO_TOKEN });
    }
  }
}

export default new jwtHandler();
