//start fetch post 
//success fetch post 
//end fetch post 

import axios from "../../axios-instance"
import * as actiontypes from './actiontypes';

export const getpoststart=()=>{
    return{
        type:actiontypes.GET_POST_START,
    }
}


export const getpostfailure=()=>{
    return{
        type:actiontypes.GET_POST_FAILURE,
    }
}


export const getpostsuccess=(data)=>{
    return{
        type:actiontypes.GET_POST_SUCCESS,
        payload:data
    }
}

export const pagezeroaction=()=>{
    return{
        type:actiontypes.PAGE_ZERO_ACTION
    }
}

export const getPost=(page)=>{
//    debugger
    return (dispatch)=>{

        // if(page===0)dispatch(pagezeroaction());
        dispatch(getpoststart());
        // console.log(page);
        axios.get(`/post/getallpost?page=${page}`)
        .then((response)=>{
            // console.log(response.data);
            if(response.data.length>0)
            dispatch(getpostsuccess(response.data));
            else
            dispatch(setFetchMorePost());
        })
        .catch((err)=>{
            // console.log(err);
            dispatch(getpostfailure());
        })
    }

}
export const setFetchMorePost=()=>{
    return{
        type:actiontypes.SET_FETCH_MORE_POST
    }
}

// create post start
// create post success
// create post failure
export const createpoststart=()=>{
    return{
        type:actiontypes.CREATE_POST_START,
    }
}


export const createpostfailure=()=>{
    return{
        type:actiontypes.CREATE_COMMENT_FAILURE,
    }
}


export const createpostsuccess=(data)=>{
    // console.log(data);
    return{
        type:actiontypes.CREATE_POST_SUCCESS,
        payload:data
    }
}

export const createPost=(formdata)=>{
    return (dispatch)=>{
        // console.log('dispatch post')
        dispatch(createpoststart());
        axios.post('/post/createpost',formdata,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
              }
        })
        .then((response)=>{
            // console.log(response.data);
            response.data.comment=[];
            dispatch(createpostsuccess(response.data));
        })
        .catch(()=>{
            dispatch(createpostfailure());
        })
    }

}
export const likepost=(postId,profileId)=>{
    return{
        type:actiontypes.LIKE_POST,
        postId:postId,
        profileId:profileId
    }
}

export const unlikepost=(postId,profileId)=>{
    return{
        type:actiontypes.UNLIKE_POST,
        postId:postId,
        profileId:profileId
    }
}
export const dislikepost=(postId,profileId)=>{
    return{
        type:actiontypes.DISLIKE_POST,
        postId:postId,
        profileId:profileId
    }
}

export const undislikepost=(postId,profileId)=>{
    return{
        type:actiontypes.UNDISLIKE_POST,
        postId:postId,
        profileId:profileId
    }
}


export const likeaction=(postId,profileId)=>{
    return (dispatch)=>{

        dispatch(likepost(postId,profileId))
        axios.post('/post/likepost', { postId: postId })
        .then((res) => {
            // console.log(res);
        })
    }
}

export const unlikeaction=(postId,profileId)=>{
    return (dispatch)=>{

        dispatch(unlikepost(postId,profileId))
        axios.post('/post/unlikepost', { postId: postId })
        .then((res) => {
            // console.log(res);
        })
    }
}

export const dislikeaction=(postId,profileId)=>{
    return (dispatch)=>{
        dispatch(dislikepost(postId,profileId));

        axios.post('/post/dislikepost', { postId: postId })
                    .then((res) => {
                        // console.log(res);
                    })
    }
    }

export const undislikeaction=(postId,profileId)=>{
    return (dispatch)=>{

        dispatch(undislikepost(postId,profileId));
    
        axios.post('/post/undislikepost', { postId: postId })
        .then((res) => {
            // console.log(res);
        })   
    }
}