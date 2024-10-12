import express from 'express';

import { PostController } from './post.controller';
import { multerUpload } from '../../config/multer.config';
import { ImageFilesArrayZodSchema } from '../imageUpload/imageUpload.validation';
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

export const PostRoutes = router;
