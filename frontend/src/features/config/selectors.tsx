import {RootState} from "../../store";

export const selectConfig = (state: RootState) => state.siteConfig.items ?? [];
export const selectConfigLoading = (state: RootState) => state.siteConfig.pending;
export const selectConfigError = (state: RootState) => state.siteConfig.error;