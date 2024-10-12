import { Schema, model } from 'mongoose';
import { TVotes } from './votes.interface';

const VoteSchema = new Schema<TVotes>({
    userId: {
        type: String,
        required: true,
        ref: 'User',
    },
    postId: {
        type: String,
        required: true,
        ref: 'Post',
    },
    vote: {
        type: String,
        required: true,
        enum: ['up', 'down'],
    },
});

export const VoteModel = model<TVotes>('Vote', VoteSchema);
