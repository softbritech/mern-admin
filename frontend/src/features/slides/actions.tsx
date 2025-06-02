import {AppDispatch} from "../../store";
import SlideService from "../../app/services/slideService.tsx";
import {FETCH_SLIDES_FAILURE, FETCH_SLIDES_PENDING, FETCH_SLIDES_SUCCESS} from "./types.tsx";

export const fetchSlides =  () => {
    return async  (dispatch: AppDispatch) => {
        try {
            dispatch({ type: FETCH_SLIDES_PENDING});
            const data = await SlideService.getSlides();
            dispatch({
                type: FETCH_SLIDES_SUCCESS,
                payload: data,
            });
        } catch (error){
            dispatch({
                type: FETCH_SLIDES_FAILURE,
                payload: error,
            });
        }
    }

}