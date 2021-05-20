import * as actionTypes from '../action/actiontypes';
const initailState={
    token:null,
    userDetails:null,
    error:null,
    loading:false,
    profileId:undefined,
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
const getUserDetailsSuccess=(state,action)=>{
    return{
        ...state,
        userDetails:action.payload,
        loading:false,
        profileId:action.payload._id
    }
} 
const getUserDetailsStart=(state,action)=>{
    return{
        ...state,
        loading:true,
    }
}

const reducer=(state=initailState,action)=>{
    switch (action.type) {
        case actionTypes.SET_TOKEN:
            return settoken(state,action);
        case actionTypes.AUTH_LOGOUT:
            return logout(state,action);
        case actionTypes.GET_USER_DETAILS_SUCCESS:
            return getUserDetailsSuccess(state,action);
        case actionTypes.GET_USER_DETAILS_START:
            return getUserDetailsStart(state,action);
        default:
            return state;
    }
};

export default reducer;