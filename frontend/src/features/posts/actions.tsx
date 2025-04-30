import PostService from "../../app/services/postService.tsx";
import {FETCH_POSTS_FAILURE, FETCH_POSTS_PENDING, FETCH_POSTS_SUCCESS} from "./types.tsx";
import {AppDispatch} from "../../store";

export const fetchPosts = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch({type: FETCH_POSTS_PENDING});
            const data = await PostService.getPosts();
            dispatch({
                type: FETCH_POSTS_SUCCESS,
                payload: data,
            });

        } catch (error){
            dispatch({
                type: FETCH_POSTS_FAILURE,
                payload: error,
            });
        }
    }
}