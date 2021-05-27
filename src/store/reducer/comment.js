
import * as actionTypes from '../action/actiontypes';
const initailState={
    comments:[],
    error:null,
    loading:false,
    createdcomment:null,
    createdcommentloading:false,
    createdcommenterror:null,

};

const getcommentstart=(state,action)=>{
    return {
        ...state,
        loading:true,
    }
}
const getcommentsuccess=(state,action)=>{
    return {
        ...state,
        loading:false,
        comments:action.payload,
        
    }
}

const getcommentfailure=(state,action)=>{
    return {
        ...state,
        loading:false,
        error:true
    }
}

const createcommentstart=(state,action)=>{
    return {
        ...state,
        createdcommentloading:true,
    }
}
const createcommentsuccess=(state,action)=>{
    return {
        ...state,
        createdcommentloading:false,
        createdcomment:action.payload,
        
    }
}

const createcommentfailure=(state,action)=>{
    return {
        ...state,
        createdcommentloading:false,
        createdcommenterror:true
    }
}




const reducer=(state=initailState,action)=>{
    switch (action.type) {
        case actionTypes.GET_COMMENT_START:
            return getcommentstart(state,action);
        case actionTypes.GET_COMMENT_SUCCESS:
            return getcommentsuccess(state,action);
        case actionTypes.GET_COMMENT_FAILURE:
            return getcommentfailure(state,action);
        case actionTypes.CREATE_COMMENT_START:
            return createcommentstart(state,action);
        case actionTypes.CREATE_COMMENT_SUCCESS:
            return createcommentsuccess(state,action);
        case actionTypes.CREATE_COMMENT_FAILURE:
            return createcommentfailure(state,action);
        default:
            return state;
    }
};

export default reducer;