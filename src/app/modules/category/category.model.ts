import { Schema, model } from 'mongoose';
import { TCategory } from './category.interface';

const categorySchema = new Schema<TCategory>({
    name: {
        type: String,
        required: true,
        trim: true,
    },
});

export const CategoryModel = model<TCategory>('Category', categorySchema);
