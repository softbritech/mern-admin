import { useEffect } from 'react';
import {useSelector, useDispatch, TypedUseSelectorHook} from 'react-redux';
import { fetchPosts } from './actions';
import {
    selectPosts,
    selectPostsLoading,
    selectPostsError,
} from './selectors';
import {AppDispatch, RootState} from "../../store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const usePosts = () => {
    const dispatch = useAppDispatch();
    const posts   = useSelector(selectPosts);
    const loading = useSelector(selectPostsLoading);
    const error   = useSelector(selectPostsError);

    useEffect(() => {
        if (!loading && posts.length === 0 && !error) {
            dispatch(fetchPosts());
        }
    }, [dispatch, loading, posts.length, error]);

    return { posts, loading, error };
}