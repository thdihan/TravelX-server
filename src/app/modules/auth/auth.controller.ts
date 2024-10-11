import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthService } from './auth.service';
import { TUser } from '../user/user.interface';

// Signup Controller
const signup = catchAsync(async (req, res) => {
    const userPayload: TUser = { ...req.body };

    // set user role to 'user' by default
    userPayload.role = 'user';

    const result = await AuthService.createUserIntoDB(userPayload);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User registered successfully',
        data: result,
    });
});

const login = catchAsync(async (req, res) => {
    console.log('req.body', req.body);
    const result = await AuthService.loginUserFromDB(req.body);

    res.status(httpStatus.OK).json({
        success: true,
        statusCode: httpStatus.OK,
        message: 'User logged in successfully',
        token: result?.accessToken,
        data: result?.loggedInUser,
    });
});

export const AuthController = {
    signup,
    login,
};
