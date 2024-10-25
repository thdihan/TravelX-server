import { FollowModel } from './follow.model';

const followSomebody = async (userId: string, followerId: string) => {
    const follow = await FollowModel.create({ userId, followerId });
    return follow;
};

const unfollowSomebody = async (userId: string, followerId: string) => {
    await FollowModel.findOneAndDelete({ userId, followerId });
    return;
};

const getFollowing = async (userId: string) => {
    const followers = await FollowModel.find({ userId }).populate('followerId');
    return followers;
};

const getFollowers = async (followId: string) => {
    const followers = await FollowModel.find({ followId }).populate(
        'userId followerId',
    );
    return followers;
};

export const FollowService = {
    followSomebody,
    unfollowSomebody,
    getFollowing,
    getFollowers,
};
