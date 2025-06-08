import {AppDispatch} from "../../store";
import ServiceService from "../../app/services/serviceService.tsx";
import {FETCH_SERVICES_FAILURE, FETCH_SERVICES_PENDING, FETCH_SERVICES_SUCCESS} from "./types.tsx";

export const fetchServices = () => {
    return async  (dispatch: AppDispatch) => {
        try {
            dispatch({ type: FETCH_SERVICES_PENDING});
            const data = await ServiceService.getServices();
            dispatch({
                type: FETCH_SERVICES_SUCCESS,
                payload: data,
            });
        } catch (error){
            dispatch({
                type: FETCH_SERVICES_FAILURE,
                payload: error,
            });
        }
    }
}