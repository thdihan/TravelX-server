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

const getSinglePostFromDB = async (id: string) => {
    const post = await PostModel.findById(id).populate('user category');

    return post;
};

export const PostServices = {
    createPostIntoDB,
    getPostsFromDB,
    getSinglePostFromDB,
};
