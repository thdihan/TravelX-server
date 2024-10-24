import express from 'express';
import { FollowController } from './follow.controller';

const router = express.Router();

router.post('/', FollowController.follow);
router.delete('/', FollowController.unfollow);
router.get('/following/:userId', FollowController.getFollowing);
router.get('/followers/:followId', FollowController.getFollowers);

export const FollowRoutes = router;
