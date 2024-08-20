import express from 'express';
import { UserLogin } from '../controller/UserController.js';

const userRouter = express.Router();

userRouter.post('/login', UserLogin);
userRouter.post('/register');

export  {userRouter};