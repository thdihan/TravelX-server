import { TVotes } from './votes.interface';
import { VoteModel } from './votes.model';

const addVote = async (vote: TVotes) => {
    const newVote = await VoteModel.create(vote);
    return newVote;
};

const updateVote = async (vote: TVotes) => {
    const updatedVote = await VoteModel.findOneAndUpdate(
        { postId: vote.postId, userId: vote.userId },
        vote,
        { new: true },
    );
    return updatedVote;
};

const deleteVote = async ({
    postId,
    userId,
}: {
    postId: string;
    userId: string;
}) => {
    await VoteModel.findOneAndDelete({
        postId,
        userId,
    });
};

const getVotes = async () => {
    const votes = await VoteModel.find();
    return votes;
};

export const VotesService = {
    addVote,
    updateVote,
    deleteVote,
    getVotes,
};
