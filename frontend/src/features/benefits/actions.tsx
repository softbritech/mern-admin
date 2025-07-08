import {AppDispatch} from "../../store";
import {FETCH_BENEFITS_FAILURE, FETCH_BENEFITS_LOADING, FETCH_BENEFITS_SUCCESS} from "./types.tsx";
import BenefitService from "../../app/services/benefitService.tsx";


export const fetchBenefits = () => {
    return async(dispatch: AppDispatch) => {
        try {
            dispatch({type: FETCH_BENEFITS_LOADING});
            const data = await BenefitService.getBenefits();
            dispatch({type: FETCH_BENEFITS_SUCCESS,
                payload: data})
        } catch (error) {
            dispatch({type: FETCH_BENEFITS_FAILURE,
                payload: error,})
        }
    }
}