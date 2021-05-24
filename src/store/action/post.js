//start fetch post 
//success fetch post 
//end fetch post 

import axios from "axios"
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

export const getPost=()=>{
    return (dispatch)=>{
        dispatch(getpoststart());
        axios.get('http://localhost:5000/post/getallpost')
        .then((response)=>{
            console.log(response.data);
            dispatch(getpostsuccess(response.data));
        })
        .catch((err)=>{
            console.log(err);
            dispatch(getpostfailure());
        })
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
    return{
        type:actiontypes.CREATE_POST_SUCCESS,
        payload:data
    }
}

export const createPost=(formdata)=>{
    return (dispatch)=>{
        dispatch(createpoststart());
        axios.post('http://localhost:5000/post/createpost',formdata,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
              }
        })
        .then((response)=>{
            console.log(response.data);
            dispatch(createpostsuccess(response.data));
        })
        .catch(()=>{
            dispatch(createpostfailure());
        })
    }

}
