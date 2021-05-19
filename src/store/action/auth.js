import axios from 'axios';
import * as actiontypes from './actiontypes';

export const settoken=function(){
    console.log('settoken called');
    console.log(localStorage.getItem('token'))
    if(localStorage.getItem('token')==='' || localStorage.getItem('token')===null){
        localStorage.setItem('token',document.cookie.split('=')[1]);
    }
    document.cookie='jwt='
    // console.log(localStorage.getItem('token'))
    return{
        type:'SET_TOKEN',
        token:localStorage.getItem('token')===''?null:localStorage.getItem('token')
    }  
}

export const logout=function(){
    console.log('logout called');
    localStorage.removeItem('token');

    return{
        type:'AUTH_LOGOUT'
    }
}

export const getUserDetailsStart=function(){
    return{
        type:actiontypes.GET_USER_DETAILS_START
    }
}

export const getUserDetailsSuccess=function(data){
    return{
        type:actiontypes.GET_USER_DETAILS_SUCCESS,
        payload:data,
    }

}

export const getUserDetails=function(){
    console.log("getUserDetails called");
    return (dispatch)=>{
        dispatch(getUserDetailsStart());
        axios({ method: 'GET', url: 'http://localhost:5000/profile/userprofile' }).then((res) => {
            console.log(res.data);
            let obj={
                _id:res.data._id,
                firstName:res.data.firstName,
                lastName:res.data.lastName,
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
            dispatch(getUserDetailsSuccess(obj));
        })
    }
    
}