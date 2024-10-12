import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { VoteModel } from './votes.model';

const addVote = catchAsync(async (req, res) => {
    console.log('Vote Initiated', req.body);
    const result = await VoteModel.create(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Vote given successfully',
        data: result,
    });
});

const updateVote = catchAsync(async (req, res) => {
    const result = await VoteModel.findOneAndUpdate(
        { postId: req.body.postId, userId: req.body.userId },
        req,
    );

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Vote updated successfully',
        data: result,
    });
});

const deleteVote = catchAsync(async (req, res) => {
    const { postId, userId } = req.query;

    await VoteModel.findOneAndDelete({
        postId,
        userId,
    });

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Vote deleted successfully',
        data: {},
    });
});

const getVotes = catchAsync(async (req, res) => {
    const votes = await VoteModel.find();

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Votes fetched successfully',
        data: votes,
    });
});

export const VotesController = {
    addVote,
    updateVote,
    deleteVote,
    getVotes,
};
