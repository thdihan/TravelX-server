import express from 'express';

import { PostController } from './post.controller';
import { multerUpload } from '../../config/multer.config';
import {
    ImageFilesArrayZodSchema,
    ImageFilesUploadZodSchema,
} from '../imageUpload/imageUpload.validation';
import validateImageFileRequest from '../../middlewares/validateImageFileRequest';
import { parseBody } from '../../middlewares/parseBody';

const router = express.Router();

router.post(
    '/',
    multerUpload.fields([{ name: 'itemImages' }]),
    validateImageFileRequest(ImageFilesArrayZodSchema),
    parseBody,
    PostController.createPost,
);

router.get('/', PostController.getPosts);

router.get('/:id', PostController.getSinglePost);

router.put(
    '/:id',
    multerUpload.fields([{ name: 'itemImages' }]),
    validateImageFileRequest(ImageFilesUploadZodSchema),
    parseBody,
    PostController.updatePost,
);

export const PostRoutes = router;
