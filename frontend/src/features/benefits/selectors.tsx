import {RootState} from "../../store";

export const selectBenefit = (state: RootState) => state.benefits.items ?? [];
export const selectBenefitLoading = (state: RootState) => state.benefits.pending;
export const selectBenefitError = (state: RootState) => state.benefits.error;