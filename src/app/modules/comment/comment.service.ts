import { CommentModel } from './comment.model';

const createCommentIntoDB = async (comment: Comment) => {
    const newComment = await CommentModel.create(comment);
    return newComment;
};

const getCommentsFromDB = async (postId: string) => {
    const comments = await CommentModel.find({ postId })
        .populate('userId postId')
        .sort({ createdAt: -1 });

    return comments;
};

export const CommentService = {
    createCommentIntoDB,
    getCommentsFromDB,
};
