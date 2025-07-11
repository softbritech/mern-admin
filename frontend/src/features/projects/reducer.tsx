
const initialState = {
    items: [],
    pending: false,
    error:false,
}

const projectReducer = (state = initialState, action: any) => {
    switch (action.type){
        case ('FETCH_PROJECTS_SUCCESS'): {
            return {
                ...state,
                items: action.payload,
                pending: false,
                error: false,
            }
        }
        case ('FETCH_PROJECTS_PENDING'): {
            return {
                ...state,
                items: [],
                pending: true,
                error: false,
            }
        }
        case ('FETCH_PROJECTS_FAILURE'): {
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

export default projectReducer;