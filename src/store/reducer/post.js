
import * as actionTypes from '../action/actiontypes';
const initailState={
    posts:[],
    error:null,
    loading:false,
    createdpost:null,
    createdpostloading:false,
    createdposterror:null,
    fetchMorePost:true,
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
        posts:[...state.posts,...action.payload],
        
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
        posts:[action.payload,...state.posts],
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

const setfetchmorepost=(state,action)=>{
    return {
        ...state,
        fetchMorePost:false,
    }
}

const pagezeroaction=(state,action)=>{
    return{
        ...state,
        posts:[],
        fetchMorePost:true,
    }
}

const likepost=(state,action)=>{
    const postId=action.postId;
    const profileId=action.profileId;
    for(let i=0;i<state.posts.length;i++){
        if(postId===state.posts[i]._id){
            state.posts[i].likes.push(profileId);
            let idx=state.posts[i].dislikes.indexOf(String(profileId));
            if(idx>-1){
                state.posts[i].dislikes.splice(idx,1);
            }
            break;
        }
    }
    return{
        ...state,
        posts:[...state.posts]
    }
    
}
const unlikepost=(state,action)=>{
    const postId=action.postId;
    const profileId=action.profileId;

    for(let i=0;i<state.posts.length;i++){
        if(postId===state.posts[i]._id){
            console.log(String(profileId));
            console.log(state.posts[i].likes)
            let idx=state.posts[i].likes.indexOf(String(profileId));
            console.log(idx);
            if(idx>-1){
                
                state.posts[i].likes.splice(idx,1);
            }
            break;
        }
    }
    return{
        ...state,
        posts:[...state.posts]
    }
    
}

const dislikepost=(state,action)=>{
    const postId=action.postId;
    const profileId=action.profileId;

    for(let i=0;i<state.posts.length;i++){
        if(postId===state.posts[i]._id){
            state.posts[i].dislikes.push(profileId);
            let idx=state.posts[i].likes.indexOf(String(profileId));
            if(idx>-1){
                state.posts[i].likes.splice(idx,1);
            }
            break;
        }
    }
    return{
        ...state,
        posts:[...state.posts]
    }
    
}
const undislikepost=(state,action)=>{
    const postId=action.postId;
    const profileId=action.profileId;

    for(let i=0;i<state.posts.length;i++){
        if(postId===state.posts[i]._id){
            let idx=state.posts[i].dislikes.indexOf(String(profileId));
            if(idx>-1){
                state.posts[i].dislikes.splice(idx,1);
            }
            break;
        }
    }
    return{
        ...state,
        posts:[...state.posts]
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
        case actionTypes.SET_FETCH_MORE_POST:
            return setfetchmorepost(state,action);
        case actionTypes.PAGE_ZERO_ACTION:
            return pagezeroaction(state,action);
        case actionTypes.LIKE_POST:
            return likepost(state,action)
        case actionTypes.UNLIKE_POST:
            return unlikepost(state,action)
        case actionTypes.DISLIKE_POST:
            return dislikepost(state,action)
        case actionTypes.UNDISLIKE_POST:
            return undislikepost(state,action)
        default:
            return state;
    }
};

export default reducer;