import {AppDispatch} from "../../store";
import {FETCH_PAGES_FAILURE, FETCH_PAGES_PENDING, FETCH_PAGES_SUCCESS} from "./types.tsx";
import pageService from "../../app/services/pageService.tsx";

export const fetchPages = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch({type: FETCH_PAGES_PENDING});

           const data = await pageService.getPages();

            dispatch({
                type: FETCH_PAGES_SUCCESS,
                payload: data,
            })

        } catch (error){
            dispatch({
                type: FETCH_PAGES_FAILURE,
                payload: error,
            });
        }
    }
}