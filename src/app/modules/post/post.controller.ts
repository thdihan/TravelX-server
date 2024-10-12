import httpStatus from 'http-status';
import AppError from '../../utils/appError';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TImageFiles } from '../imageUpload/image.interface';
import { PostServices } from './post.service';

const createPost = catchAsync(async (req, res) => {
    // console.log(req.headers);
    if (!req.files) {
        throw new AppError(400, 'Please upload an image');
    }

    const item = await PostServices.createPostIntoDB(
        req.body,
        req.files as TImageFiles,
    );

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Item created successfully',
        data: item,
    });
});

const getPosts = catchAsync(async (req, res) => {
    console.log(req.query);
    const posts = await PostServices.getPostsFromDB(req.query || {});

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Posts fetched successfully',
        data: posts,
    });
});

export const PostController = {
    createPost,
    getPosts,
};
