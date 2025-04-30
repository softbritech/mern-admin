
const initialState = {
    items: [],
    pending: false,
    error:false,
}
const pageReducer = (state = initialState, action: any) => {
    switch (action.type){
        case ('FETCH_PAGES_SUCCESS'): {
            return {
                ...state,
                items: action.payload,
                pending: false,
                error: false,
            }
        }
        case ('FETCH_PAGES_FAILURE'): {
            return {
                ...state,
                items: [],
                pending: false,
                error: true,
            }
        }
        case ('FETCH_PAGES_PENDING'): {
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
export default pageReducer;