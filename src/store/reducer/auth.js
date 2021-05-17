import * as actionTypes from '../action/actiontypes';
const initailState={
    token:null,
    userDetails:null,
    error:null,
    loading:false,
    authRedirectPath:'/',
};
const settoken=(state,action)=>{
    return {
        ...state,
        token:action.token
    }
}

const logout=(state,action)=>{
    return {
        ...state,
        token:null,
    }
}

const reducer=(state=initailState,action)=>{
    switch (action.type) {
        case actionTypes.SET_TOKEN:
            return settoken(state,action);
        case actionTypes.AUTH_LOGOUT:
            return logout(state,action);
        default:
            return state;
    }
};

export default reducer;