export const FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS";
export const FETCH_PROJECTS_LOADING = "FETCH_PROJECTS_LOADING";
export const FETCH_PROJECTS_FAILURE = "FETCH_PROJECTS_FAILURE";

export interface Post{
    id: string;
    _id: string;
    [key: string]: any;
}