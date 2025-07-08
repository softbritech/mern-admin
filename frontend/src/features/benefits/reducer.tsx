
const initialState = {
    items: [],
    pending: false,
    error: false,
}

const benefitReducer = (state = initialState , action: any) => {
    switch (action.type){
        case('FETCH_BENEFITS_SUCCESS'): {
            return {
                ...state,
                items: action.payload,
                pending:false,
                error: false,
            }
        }
        case('FETCH_BENEFITS_LOADING'): {
            return {
                ...state,
                items: [],
                pending: true,
                error: false,
            }
        }
        case ('FETCH_BENEFITS_FAILURE'): {
            return {
                ...state,
                items: [],
                pending: false,
                error: true,
            }
        }
        default:
            return state;

    }
}

export default benefitReducer;