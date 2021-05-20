import axios from "axios"
import * as actiontypes from './actiontypes';

export const getProfileStart=()=>{
    return{
        type:actiontypes.GET_PROFILE_START,

    }
}


export const getProfileFailure=()=>{
    return{
        type:actiontypes.GET_PROFILE_FAILURE,

    }
}

export const getProfileSuccess=(data)=>{
    return{
        type:actiontypes.GET_PROFILE_SUCCESS,
        payload:data,
    }

}

export const getProfile=function(profileId){
    return (dispatch)=>{
        //start
        dispatch(getProfileStart());
        axios.get(`http://localhost:5000/profile/anyuserprofile?profileId=${profileId}`)
        .then((res)=>{
            //success
            console.log('response of profile',res);
            let obj={
                _id:res.data._id,
                firstName:res.data.firstName,
                lastName:res.data.lastName,
                about:res.data.about===undefined?'':res.data.about,
                dob:res.data.dob===undefined?'':res.data.dob,
                gender:res.data.gender===undefined?'':res.data.gender,
                city:res.data.city===undefined?'':res.data.city,
                state:res.data.state===undefined?'':res.data.state,
                profileImage:res.data.profileImage===undefined?'':res.data.profileImage,
                coverImage:res.data.coverImage===undefined?'':res.data.coverImage,
                friendsList:res.data.friendsList,
                requestList:res.data.requestList,
                requestSent:res.data.requestSent,
            }
            dispatch(getProfileSuccess(obj));

        }).catch(err=>{
            //failure
        dispatch(getProfileFailure());

        })
    }

}