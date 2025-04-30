export const FETCH_PAGES_PENDING = 'FETCH_PAGES_PENDING';
export const FETCH_PAGES_SUCCESS = 'FETCH_PAGES_SUCCESS';
export const FETCH_PAGES_FAILURE = 'FETCH_PAGES_FAILURE';

export interface Page {
    _id: string;
    id: string;
    name: string;
    [key: string]: any;
}