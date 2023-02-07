import express from 'express';
import authController from '../controllers/authController.js';
import jwtHandler from '../jwt/jwtHandler.js';

const authRouter = express.Router();

authRouter.post('/register', authController.register);

authRouter.post('/login', authController.login);

authRouter.get('/verify', authController.verifyAuthentication);

authRouter.delete(
  '/logout',
  jwtHandler.verifyTokenOnRequest,
  authController.logout
);

export default authRouter;
