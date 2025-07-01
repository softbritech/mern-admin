import {AppDispatch} from "../../store";
import {FETCH_CONFIG_FAILURE, FETCH_CONFIG_PENDING, FETCH_CONFIG_SUCCESS} from "./types.tsx";
import configService from "../../app/services/configService.tsx";


export const fetchConfig = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch({ type: FETCH_CONFIG_PENDING});
            const data = await configService.getConfig();
            dispatch({
                type: FETCH_CONFIG_SUCCESS,
                payload: data,
            })
        } catch (error){
            dispatch({type: FETCH_CONFIG_FAILURE})
        }
    }
}