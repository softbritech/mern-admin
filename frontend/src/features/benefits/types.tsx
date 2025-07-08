export const FETCH_BENEFITS_SUCCESS = 'FETCH_BENEFITS_SUCCESS';

export const FETCH_BENEFITS_LOADING = 'FETCH_BENEFITS_LOADING';

export const FETCH_BENEFITS_FAILURE = 'FETCH_BENEFITS_FAILURE';

export interface Benefit {
    _id: string,
    id: string;
    title: string;
    [key: string]: any;
}