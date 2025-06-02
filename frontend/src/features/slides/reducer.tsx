
const initialState = {
    items: [],
    pending: false,
    error:false,
}
const slideReducer = (state = initialState, action: any) => {
    switch (action.type){
        case ('FETCH_SLIDES_SUCCESS'): {
            return {
                ...state,
                items: action.payload,
                pending: false,
                error: false,
            }
        }
        case ('FETCH_SLIDES_FAILURE'): {
            return {
                ...state,
                items: [],
                pending: false,
                error: true,
            }
        }
        case ('FETCH_SLIDES_PENDING'): {
            return {
                ...state,
                items: [],
                pending: true,
                error: false,
            }
        }
        default:
            return state;
    }
}
export default slideReducer;