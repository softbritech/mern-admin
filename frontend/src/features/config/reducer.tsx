
const initialState = {
    items: {},
    pending: false,
    error:false,
}

const configReducer = (state = initialState, action: any) => {
    switch (action.type){
        case ('FETCH_CONFIG_SUCCESS'): {
            const configObj = action.payload.reduce((acc: Record<string, string>, item: any) => {
                acc[item.key] = item.value;
                return acc;
            }, {});
            return {
                ...state,
                items: configObj,
                pending: false,
                error: false,
            }
        }
        case ('FETCH_CONFIG_LOADING'): {
            return {
                ...state,
                items: {},
                pending: true,
                error: false,
            }
        }
        case ('FETCH_CONFIG_FAILURE'): {
            return {
                ...state,
                items: {},
                pending: false,
                error: true,
            }
        }
        default:
         return state;
    }
}

export default configReducer;