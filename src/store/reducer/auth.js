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

const removefriend=(state,action)=>{
    let idx=state.userDetails.friendsList.indexOf(action.payload);
    console.log('line 40 auth reducer',idx);
    if(idx>-1){
        state.userDetails.friendsList.splice(idx,1);
    }
    state.userDetails.friendsList=[...state.userDetails.friendsList];
    let ab=JSON.parse(JSON.stringify(state));
    // return {
    //     ...state
    // }
    return ab;
}
const addfriend=(state,action)=>{
    state.userDetails.requestSent.push(action.payload);
    let ab=JSON.parse(JSON.stringify(state));
    // return {
    //     ...state
    // }
    return ab;
}

const acceptfriend=(state,action)=>{
    let idx=state.userDetails.requestList.indexOf(action.payload);
    if(idx>-1){
        state.userDetails.requestList.splice(idx,1);
    }
    state.userDetails.friendsList.push(action.payload);
    let ab=JSON.parse(JSON.stringify(state));
    return ab;
}

const rejectfriend=(state,action)=>{
    let idx=state.userDetails.requestList.indexOf(action.payload);
    if(idx>-1){
        state.userDetails.requestList.splice(idx,1);
    }
    let ab=JSON.parse(JSON.stringify(state));
    return ab;


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
        case "REMOVE_FRIEND":
            return removefriend(state,action);
        case "ADD_FRIEND":
            return addfriend(state,action);
        case "ACCEPT_FRIEND":
            return acceptfriend(state,action);
        case "REJECT_FRIEND":
            return rejectfriend(state,action);
        default:
            return state;
    }
};

export default reducer;