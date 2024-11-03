import { Request, Response } from 'express';

import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

import { ImageUploadServices } from './imageUpload.service';
import catchAsync from '../../utils/catchAsync';
import { TImageFile } from './image.interface';

const uploadImage = catchAsync(async (req: Request, res: Response) => {
    let result;
    if (req.file)
        result = await ImageUploadServices.uploadImage(req.file as TImageFile);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Photo uploaded successfully',
        data: result,
    });
});

export const ImageUploadController = {
    uploadImage,
};
