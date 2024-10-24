import { model, Schema } from 'mongoose';
import { TFollower } from './follow.interface';

const FollowSchema = new Schema<TFollower>(
    {
        userId: {
            type: String,
            ref: 'User',
            required: true,
        },
        followerId: {
            type: String,
            ref: 'User',
            required: true,
        },
    },
    { timestamps: true },
);

export const FollowModel = model<TFollower>('Follow', FollowSchema);
