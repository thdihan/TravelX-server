import { Schema, model } from 'mongoose';
import { TPost } from './post.interface';

const PostSchema = new Schema<TPost>({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        ref: 'Category',
    },
    user: {
        type: String,
        required: true,
        ref: 'User',
    },
    images: {
        type: [String],
        default: [],
    },
    isPremium: {
        type: Boolean,
        required: true,
    },
});

export const PostModel = model<TPost>('Post', PostSchema);
