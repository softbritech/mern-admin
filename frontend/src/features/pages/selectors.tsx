import {RootState} from "../../store";

export const selectPages = (state: RootState) => state.pages.items ?? [];
export const selectPagesLoading = (state: RootState) => state.pages.pending;
export const selectPagesError = (state: RootState) => state.pages.error;