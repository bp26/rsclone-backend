import express from 'express';
import multer from '../fileUpload/multer.js';
import userController from '../controllers/userController.js';
import jwtHandler from '../jwt/jwtHandler.js';

const userRouter = express.Router();

userRouter.get('/', jwtHandler.verifyTokenOnRequest, userController.getUser);
userRouter.put('/', jwtHandler.verifyTokenOnRequest, userController.updateUser);
userRouter.post(
  '/avatar',
  jwtHandler.verifyTokenOnRequest,
  multer.single('avatar'),
  userController.uploadAvatar
);

export default userRouter;
