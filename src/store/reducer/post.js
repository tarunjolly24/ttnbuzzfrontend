
import * as actionTypes from '../action/actiontypes';
const initailState={
    posts:[],
    error:null,
    loading:false,
    createdpost:null,
    createdpostloading:false,
    createdposterror:null,

};

const getpoststart=(state,action)=>{
    return {
        ...state,
        loading:true,
    }
}
const getpostsuccess=(state,action)=>{
    return {
        ...state,
        loading:false,
        posts:action.payload,
        
    }
}

const getpostfailure=(state,action)=>{
    return {
        ...state,
        loading:false,
        error:true
    }
}

const createpoststart=(state,action)=>{
    return {
        ...state,
        createdpostloading:true,
    }
}
const createpostsuccess=(state,action)=>{
    return {
        ...state,
        createdpostloading:false,
        createdpost:action.payload,
        
    }
}

const createpostfailure=(state,action)=>{
    return {
        ...state,
        createdpostloading:false,
        createdposterror:true
    }
}




const reducer=(state=initailState,action)=>{
    switch (action.type) {
        case actionTypes.GET_POST_START:
            return getpoststart(state,action);
        case actionTypes.GET_POST_SUCCESS:
            return getpostsuccess(state,action);
        case actionTypes.GET_POST_FAILURE:
            return getpostfailure(state,action);
        case actionTypes.CREATE_POST_START:
            return createpoststart(state,action);
        case actionTypes.CREATE_POST_SUCCESS:
            return createpostsuccess(state,action);
        case actionTypes.CREATE_POST_FAILURE:
            return createpostfailure(state,action);
        default:
            return state;
    }
};

export default reducer;