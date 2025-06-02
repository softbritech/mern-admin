import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {selectSlides, selectSlidesError, selectSlidesLoading} from "./selectors.tsx";
import {useEffect} from "react";
import {fetchSlides} from "./actions.tsx";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useSlides = () => {
    const dispatch = useAppDispatch();
    const slides = useSelector(selectSlides);
    const slideIsLoading = useSelector(selectSlidesLoading);
    const error   = useSelector(selectSlidesError);

    useEffect(() => {
        if(!slideIsLoading && slides.length === 0 && !error){
            dispatch(fetchSlides());
        }
    }, [dispatch, slides.length, slideIsLoading, error])

    return { slides, slideIsLoading, error}
}