import { Response } from 'express';
import { ErrorType, StatusCode } from '../types/enums.js';
import CustomError from './customError.js';

export const handleError = (res: Response, error: unknown): void => {
  if (error instanceof CustomError) {
    res.status(error.status).send({ type: error.type, message: error.message });
  } else if (error instanceof Error) {
    res
      .status(+StatusCode.SERVER_ERROR)
      .send({ type: ErrorType.SERVER, message: error.message });
  }
};
