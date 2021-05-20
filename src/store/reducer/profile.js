
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
    console.log(action.type);
    return{
        ...state,
        loading:true,
    }
}
const getProfileFailure=(state,action)=>{
    return{
        ...state,
        loading:false,
        error:action.payload,
    }
}

const reducer=(state=initailState,action)=>{
    switch (action.type) {
        case actionTypes.GET_PROFILE_START:
            return getProfileStart(state,action);
        case actionTypes.GET_PROFILE_SUCCESS:
            return getProfileSuccess(state,action);
        case actionTypes.GET_PROFILE_FAILURE:
            return getProfileFailure(state,action);
        default:
            return state;
    }
};

export default reducer;