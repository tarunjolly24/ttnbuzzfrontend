//start fetch post 
//success fetch post 
//end fetch post 

import axios from "../../axios-instance"
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
        axios.get('/comment/getallcomment')
        .then((response)=>{
            // console.log(response.data);
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
        axios.post('/comment/createcomment',{data:data},{
           
        })
        .then((response)=>{
            // console.log(response.data);
            dispatch(createcommentsuccess(response.data));
        })
        .catch(()=>{
            dispatch(createcommentfailure());
        })
    }

}
