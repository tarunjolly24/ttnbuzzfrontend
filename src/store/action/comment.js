//start fetch post 
//success fetch post 
//end fetch post 

import axios from "axios"
import * as actiontypes from './actiontypes';

export const getcommentstart=()=>{
    return{
        type:actiontypes.GET_COMMENT_START,
    }
}


export const getcommentfailure=()=>{
    return{
        type:actiontypes.GET_COMMENT_FAILURE,
    }
}


export const getcommentsuccess=(data)=>{
    return{
        type:actiontypes.GET_COMMENT_SUCCESS,
        payload:data
    }
}

export const getComment=()=>{
    return (dispatch)=>{
        dispatch(getcommentstart());
        axios.get('http://localhost:5000/comment/getallcomment')
        .then((response)=>{
            console.log(response.data);
            dispatch(getcommentsuccess(response.data));
        })
        .catch(()=>{
            dispatch(getcommentfailure());
        })
    }

}


// create post start
// create post success
// create post failure
export const createcommentstart=()=>{
    return{
        type:actiontypes.CREATE_COMMENT_START,
    }
}


export const createcommentfailure=()=>{
    return{
        type:actiontypes.CREATE_COMMENT_FAILURE,
    }
}


export const createcommentsuccess=(data)=>{
    return{
        type:actiontypes.CREATE_COMMENT_SUCCESS,
    }
}

export const createComment=(data)=>{
    return (dispatch)=>{
        dispatch(getcommentstart());
        axios.post('http://localhost:5000/comment/createcomment',{data:data},{
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        })
        .then((response)=>{
            console.log(response.data);
            dispatch(getcommentsuccess(response.data));
        })
        .catch(()=>{
            dispatch(getcommentfailure());
        })
    }

}
