import httpStatus from 'http-status';
import AppError from '../../utils/appError';
import { TUser, TUserWithId } from '../user/user.interface';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import config from '../../config';
import { createToken } from './auth.utils';
import { Types } from 'mongoose';

const createUserIntoDB = async (payload: TUser) => {
    const newUser = await User.create(payload);
    return newUser;
};

const loginUserFromDB = async (payload: TLoginUser) => {
    // checking if the user is exist

    const user: Partial<TUserWithId> = await User.isUserExistsByEmail(
        payload.email,
    );
    // console.log('USER : ', user);

    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
    }

    if (!(await User.isPasswordMatched(payload?.password, user?.password)))
        throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');

    //create token and sent to the  client
    type TJwtPayload = {
        name?: string;
        phone?: string;
        email?: string;
        profilePhoto?: string;
        role?: string;
        dob?: string;
        _id?: Types.ObjectId;
        address?: string;
    };
    const jwtPayload: TJwtPayload = {
        name: user.name,
        phone: user.phone,
        profilePhoto: user.profilePhoto,
        email: user.email,
        role: user.role,
        dob: user.dob,
        _id: user?._id,
        address: user.address,
    };
    // console.log('jwtPayload', jwtPayload);

    const accessToken = createToken(
        jwtPayload,
        config.jwt_access_secret as string,
        config.jwt_access_expires_in as string,
    );

    const refreshToken = createToken(
        jwtPayload,
        config.jwt_refresh_secret as string,
        config.jwt_refresh_expires_in as string,
    );

    // Getting User without password.
    const loggedInUser = await User.findOne({ email: payload.email }).select(
        '-password',
    );

    return {
        accessToken,
        refreshToken,
        loggedInUser,
    };
};

export const AuthService = {
    createUserIntoDB,
    loginUserFromDB,
};
