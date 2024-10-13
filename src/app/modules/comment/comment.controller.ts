import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CommentService } from './comment.service';

const createComment = catchAsync(async (req, res) => {
    const result = await CommentService.createCommentIntoDB(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Comment given successfully',
        data: result,
    });
});

const getComments = catchAsync(async (req, res) => {
    const { postId } = req.params;
    const comments = await CommentService.getCommentsFromDB(postId as string);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Comments fetched successfully',
        data: comments,
    });
});

const deleteComment = catchAsync(async (req, res) => {
    const { commentId } = req.params;

    await CommentService.deleteCommentFromDB(commentId as string);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Comment deleted successfully',
        data: {},
    });
});

const updateComment = catchAsync(async (req, res) => {
    const { commentId } = req.params;
    console.log(req.body);
    console.log(commentId);
    const result = await CommentService.updateCommentIntoDB({
        commentId: commentId as string,
        comment: req.body,
    });

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Comment updated successfully',
        data: result,
    });
});

export const CommentController = {
    createComment,
    getComments,
    deleteComment,
    updateComment,
};
