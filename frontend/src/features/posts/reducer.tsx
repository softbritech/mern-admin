
const initialState = {
    items: [],
    pending: false,
    error:false,
}
const postReducer = (state = initialState, action: any) => {
    switch (action.type){
        case 'FETCH_POSTS_SUCCESS': {
            return {...state,
                items: action.payload,
                pending: false,
                error: false,
            }
        }
        case 'FETCH_POSTS_FAILURE': {
            return {...state,
                items: [],
                error: true,
                pending: false,
            }
        }
        case 'FETCH_POSTS_PENDING': {
            return {...state,
                items: [],
                error: false,
                pending: true,
            }
        }
        default:
            return state;

    }
}
export default postReducer;
