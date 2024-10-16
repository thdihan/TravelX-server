import express from 'express';
import { AuthController } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidations } from '../user/user.validation';
import { AuthValidations } from './auth.validation';

const router = express.Router();

// Signup Route
router.post(
    '/signup',
    validateRequest(UserValidations.createUserValidationSchema),
    AuthController.signup,
);

// Login Route
router.post(
    '/login',
    validateRequest(AuthValidations.loginUserValidationSchema),
    AuthController.login,
);

export const AuthRoutes = router;
