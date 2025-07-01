import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {useEffect} from "react";
import {selectConfig, selectConfigError, selectConfigLoading} from "./selectors.tsx";
import {fetchConfig} from "./actions.tsx";


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useConfig = () => {
    const dispatch = useAppDispatch();
    const config = useSelector(selectConfig);
    const configIsLoading = useSelector(selectConfigLoading);
    const error   = useSelector(selectConfigError);

    useEffect(() => {
        if(!configIsLoading && Object.keys(config).length === 0 && !error){

            dispatch(fetchConfig());
        }
    }, [dispatch, config.length, configIsLoading, error])

    return { config, configIsLoading, error}
}