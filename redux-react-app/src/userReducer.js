const initialState = {
    name:'',
    loggedIn:false,
}

export const userReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'SET_USER':
            return{
                ...state,
                name:action.payload.name,
                loggedIn:true,
            }
        case 'LOGOUT':
            return{
                ...state,
                name:'',
                loggedIn:false,
            }
        default:
            return state;
    }
}