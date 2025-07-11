import {RootState} from "../../store";

export const selectProjects = (state: RootState) => state.projects.items ?? [];
export const selectProjectsLoading = (state: RootState) => state.projects.pending;
export const selectProjectsError = (state: RootState) => state.projects.error;