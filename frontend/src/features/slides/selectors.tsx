import {RootState} from "../../store";

export const selectSlides = (state: RootState) => state.slides.items ?? [];
export const selectSlidesLoading = (state: RootState) => state.slides.pending;
export const selectSlidesError = (state: RootState) => state.slides.error;