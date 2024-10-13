import express from 'express';

import { CommentController } from './comment.controller';

const router = express.Router();

router.post('/', CommentController.createComment);

router.put('/update/:commentId', CommentController.updateComment);

router.delete('/delete/:commentId', CommentController.deleteComment);

router.get('/:postId', CommentController.getComments);

export const CommentRoute = router;
