

const initialState = {
    posts: [],
    pending: false,
    error:false,
}
const postReducer = (state = initialState, action) => {
    switch (action.type){
        case 'FETCH_POSTS_SUCCESS': {
            return {...state,
                posts: action.payload,
                pending: false,
                error: false,
            }
        }
        case 'FETCH_POSTS_FAILURE': {
            return {...state,
                posts: [],
                error: true,
                pending: false,
            }
        }
        case 'FETCH_POSTS_PENDING': {
            return {...state,
                posts: [],
                error: false,
                pending: true,
            }
        }
        default:
            return state;

    }
}
export default postReducer;
