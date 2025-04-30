import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {selectPages, selectPagesError, selectPagesLoading} from "./selectors.tsx";
import {useEffect} from "react";
import {fetchPages} from "./actions.tsx";
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const usePages = () => {
    const dispatch = useAppDispatch();
    const pages = useAppSelector(selectPages);
    const loading = useAppSelector(selectPagesLoading);
    const error = useAppSelector(selectPagesError);

    useEffect(() => {
        if(!loading && pages.length === 0 && !error) {
            dispatch(fetchPages())
        }
    }, [dispatch, loading, error, pages.length])

    return { pages, loading, error};
}