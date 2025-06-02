export const FETCH_SLIDES_SUCCESS = "FETCH_SLIDES_SUCCESS";
export const FETCH_SLIDES_PENDING = "FETCH_SLIDES_PENDING";
export const FETCH_SLIDES_FAILURE = "FETCH_SLIDES_FAILURE";

export interface Slide{
    _id: string;
    id: string;
    title: string;
    [key: string]: any;
}