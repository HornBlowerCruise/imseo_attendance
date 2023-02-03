let initialState = {
    userId: null,
}

function loginReducer(state = initialState, action) {
    let {type, payload} = action;
    switch(type){
        case "SET_USER_ID":
            return {
                ...state, 
                userId: payload.userId,
            };
        case "INITIALIZE_MOMENTUM_DATA":
        return {
            ...state, 
            userId: null,
            };
            default:
            return {...state};
    }
    
}

export default loginReducer;