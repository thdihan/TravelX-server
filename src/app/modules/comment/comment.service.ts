import { TComment } from './comment.interface';
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

const deleteCommentFromDB = async (commentId: string) => {
    await CommentModel.findByIdAndDelete(commentId);

    return;
};

const updateCommentIntoDB = async ({
    commentId,
    comment,
}: {
    commentId: string;
    comment: TComment;
}) => {
    console.log(commentId);
    const updatedComment = await CommentModel.findByIdAndUpdate(
        commentId,
        comment,
        { new: true },
    );

    console.log(updatedComment);

    return updatedComment;
};

export const CommentService = {
    createCommentIntoDB,
    getCommentsFromDB,
    deleteCommentFromDB,
    updateCommentIntoDB,
};
