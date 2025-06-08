import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {useEffect} from "react";
import {selectServices, selectServicesError, selectServicesLoading} from "./selectors.tsx";
import {fetchServices} from "./actions.tsx";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useServices = () => {
    const dispatch = useAppDispatch();
    const services = useSelector(selectServices);
    const serviceIsLoading = useSelector(selectServicesLoading);
    const error   = useSelector(selectServicesError);

    useEffect(() => {
        if(!serviceIsLoading && services.length === 0 && !error){
            dispatch(fetchServices());
        }
    }, [dispatch, services.length, serviceIsLoading, error])

    return { services, serviceIsLoading, error}
}