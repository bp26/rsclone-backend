import express from 'express';
import authController from '../controllers/authController';
import jwtHandler from '../jwt/jwtHandler';

const authRouter = express.Router();

authRouter.post('/register', authController.register);

authRouter.post('/login', authController.login);

authRouter.get('/users', jwtHandler.checkToken, authController.getUsers);

export default authRouter;
