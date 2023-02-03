import api from "../api";

function setUserInfo(id){
    return async (dispatch) => {
    
        dispatch({
            type:"SET_USER_ID",
            payload: { 
                userId : id,
            },
        },
        )
    };
    
}

export const loginAction = {
    setUserInfo,
}