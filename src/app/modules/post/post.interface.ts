import { TVotes } from '../votes/votes.interface';

export type TPost = {
    title: string;
    content: string;
    category: string;
    user: string;
    images?: string[];
    isPremium: boolean;
};

export type TSinglePost = TPost & {
    upVotes?: TVotes[];
    downVotes?: TVotes[];
};
