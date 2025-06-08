import {RootState} from "../../store";

export const selectServices = (state: RootState) => state.services.items ?? [];
export const selectServicesLoading = (state: RootState) => state.services.pending;
export const selectServicesError = (state: RootState) => state.services.error;