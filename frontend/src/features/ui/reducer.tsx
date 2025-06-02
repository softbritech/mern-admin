
const initialState = {
    sidebarIsOpen: false,
}

const layoutReducer = (state = initialState, action: any) => {
    switch (action.type){
        case ('UI_TOGGLE_SIDEBAR'): {
            return {
                ...state,
                sidebarIsOpen: !state.sidebarIsOpen,
            }
        }
        default:
            return state;
    }
}

export default layoutReducer;