let initialState = {
    worshipStat: [],
    newWorshiper: {},
    deleteWorshiper: {},
    targetDate: "",
}

function worshipStatReducer(state = initialState, action) {
    let {type, payload} = action;
    switch(type){
        case "GET_WORSHIP_STAT":
            return {
                ...state, 
                worshipStat: payload.worshipStat,
            };
        case "POST_WORSHIPER":
            return {
                ...state, 
                postNewWorshiper: payload.postNewWorshiper,
            };
        case "DELETE_WORSHIPER":
            return {
                ...state, 
                deleteWorshiper: payload.deleteWorshiper,
            };
        case "SET_DATE":
            return {
                ...state, 
                targetDate: payload.targetDate,
            };
            default:
            return {...state};
    }
    
}

export default worshipStatReducer;