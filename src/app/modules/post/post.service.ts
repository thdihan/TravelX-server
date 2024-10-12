import { TImageFiles } from '../imageUpload/image.interface';
import { TPost } from './post.interface';
import { PostModel } from './post.model';

const createPostIntoDB = async (post: TPost, images: TImageFiles) => {
    const { itemImages } = images;

    post.images = itemImages.map((image) => image.path);

    const result = await PostModel.create(post);

    return result;
};

const getPostsFromDB = async (options: Partial<TPost>) => {
    const posts = await PostModel.find(options).populate('user category');

    return posts;
};

export const PostServices = {
    createPostIntoDB,
    getPostsFromDB,
};
