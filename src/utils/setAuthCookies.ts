import { Response } from 'express';
import { AUTH_ID, AUTH_TOKEN, COOKIE_AGE } from './constants.js';
import { StatusCode } from '../types/enums.js';

export const setAuthCookies = (
  res: Response,
  id: string,
  token: string
): void => {
  res.cookie(AUTH_ID, id, {
    httpOnly: true,
    maxAge: COOKIE_AGE,
    sameSite: 'none',
    secure: true,
  });
  res.cookie(AUTH_TOKEN, token, {
    httpOnly: true,
    maxAge: COOKIE_AGE,
    sameSite: 'none',
    secure: true,
  });
  res.sendStatus(+StatusCode.OK);
};
