
const initialState = {
    items: [],
    pending: false,
    error:false,
}
const serviceReducer = (state = initialState, action: any) => {
    switch (action.type){
        case ('FETCH_SERVICES_SUCCESS'): {
            return {
                ...state,
                items: action.payload,
                pending: false,
                error: false,
            }
        }
        case ('FETCH_SERVICES_FAILURE'): {
            return {
                ...state,
                items: [],
                pending: false,
                error: true,
            }
        }
        case ('FETCH_SERVICES_PENDING'): {
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
export default serviceReducer;