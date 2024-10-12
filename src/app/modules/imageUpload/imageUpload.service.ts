import httpStatus from 'http-status';

import AppError from '../../utils/appError';
import { TImageFile } from './image.interface';

const uploadImage = async (photo: TImageFile) => {
    if (!photo) {
        throw new AppError(
            httpStatus.BAD_REQUEST,
            'No photo provided for upload',
        );
    }

    return {
        filename: photo.originalname,
        path: photo.path,
        size: photo.size,
    };
};

export const ImageUploadServices = {
    uploadImage,
};
