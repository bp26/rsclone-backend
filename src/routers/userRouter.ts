import express from 'express';
import userController from '../controllers/userController.js';
import jwtHandler from '../jwt/jwtHandler.js';

const userRouter = express.Router();

userRouter.get('/', jwtHandler.verifyTokenOnRequest, userController.getUser);
userRouter.put('/', jwtHandler.verifyTokenOnRequest, userController.updateUser);

export default userRouter;
