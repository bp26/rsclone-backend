import { Response } from 'express';
import { StatusCode } from '../types/enums.js';
import CustomError from './customError.js';

export const handleError = (res: Response, error: unknown): void => {
  if (error instanceof CustomError) {
    res.status(error.status).send({ message: error.message });
  } else if (error instanceof Error) {
    res.status(+StatusCode.SERVER_ERROR).send({ message: error.message });
  }
};
