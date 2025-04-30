export const FETCH_POSTS_PENDING = 'FETCH_POSTS_PENDING';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export interface Post {
    _id: string;
    id: string;
    name: string;
    [key: string]: any;
}