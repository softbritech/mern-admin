import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {selectBenefit, selectBenefitError, selectBenefitLoading} from "./selectors.tsx";
import {useEffect} from "react";
import {fetchBenefits} from "./actions.tsx";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useBenefits = () => {
    const dispatch = useAppDispatch();
    const benefits = useAppSelector(selectBenefit);
    const benefitsIsLoading = useAppSelector(selectBenefitLoading);
    const error = useAppSelector(selectBenefitError);

    useEffect( ( ) => {
        if(!benefitsIsLoading && benefits.length === 0 && !error) {
            dispatch(fetchBenefits());
        }
    }, [dispatch, benefits.length, benefitsIsLoading, error])

    return { benefits, benefitsIsLoading, error};
}