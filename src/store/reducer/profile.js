import * as actiontypes from '../action/actiontypes';

import * as actionTypes from '../action/actiontypes';
const initailState={
    profileDetails:null,
    error:null,
    loading:false,
};

const getProfileSuccess=(state,action)=>{
    return{
        ...state,
        profileDetails:action.payload,
        loading:false,
    }
} 
const getProfileStart=(state,action)=>{
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