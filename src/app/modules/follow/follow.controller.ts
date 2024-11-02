import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { FollowService } from './follow.service';

const follow = catchAsync(async (req, res) => {
    const { userId, followingId } = req.body;
    console.log(userId, followingId);
    const follow = await FollowService.followSomebody(userId, followingId);
    console.log(follow);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Post fetched successfully',
        data: follow,
    });
});

const unfollow = catchAsync(async (req, res) => {
    const { userId, followerId } = req.query;
    await FollowService.unfollowSomebody(
        userId as string,
        followerId as string,
    );

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Post fetched successfully',
        data: {},
    });
});

const getFollowing = catchAsync(async (req, res) => {
    const { userId } = req.params;
    const followers = await FollowService.getFollowing(userId as string);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Post fetched successfully',
        data: followers,
    });
});

const getFollowers = catchAsync(async (req, res) => {
    console.log(req.params);
    const { followId } = req.params;
    const followers = await FollowService.getFollowers(followId as string);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Post fetched successfully',
        data: followers,
    });
});

export const FollowController = {
    follow,
    unfollow,
    getFollowing,
    getFollowers,
};
