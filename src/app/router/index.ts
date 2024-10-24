import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';

import { UserRoutes } from '../modules/user/user.route';
import { CategoryRoutes } from '../modules/category/create.route';
import { PostRoutes } from '../modules/post/post.route';
import { VotesRoute } from '../modules/votes/votes.route';
import { CommentRoute } from '../modules/comment/comment.route';
import { FollowRoutes } from '../modules/follow/follow.route';

const router = Router();

const moduleRoutes = [
    {
        path: '/auth',
        route: AuthRoutes,
    },
    {
        path: '/user',
        route: UserRoutes,
    },
    {
        path: '/category',
        route: CategoryRoutes,
    },
    {
        path: '/post',
        route: PostRoutes,
    },
    {
        path: '/vote',
        route: VotesRoute,
    },
    { path: '/comment', route: CommentRoute },
    { path: '/follow', route: FollowRoutes },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
