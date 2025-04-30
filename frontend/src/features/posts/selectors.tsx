import {RootState} from "../../store";

export const selectPosts = (state: RootState) => state.posts.items ?? [];
export const selectPostsLoading = (state: RootState) => state.posts.pending;
export const selectPostsError = (state: RootState) => state.posts.error;