import { Schema, model } from 'mongoose';
import { TComment } from './comment.interface';

const CommentSchema = new Schema<TComment>(
    {
        postId: {
            type: String,
            required: true,
            ref: 'Post',
        },
        userId: {
            type: String,
            required: true,
            ref: 'User',
        },
        comment: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

export const CommentModel = model<TComment>('Comment', CommentSchema);
