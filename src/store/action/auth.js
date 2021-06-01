import axios from '../../axios-instance';
import * as actiontypes from './actiontypes';

export const settoken=function(){
    // console.log('settoken called');
    // console.log(localStorage.getItem('token'))
    // console.log(document.cookie);
    

    if(localStorage.getItem('token')===null || localStorage.getItem('token')==='' || localStorage.getItem('token')==='jwt='){
        // console.log(document.cookie);
        localStorage.setItem('token',document.cookie);
    }
    
    document.cookie='jwt=';
    let arr=localStorage.getItem('token').split('')
    if(arr[0]==="j" && arr[1]==="w" && arr[2]==="t" && arr[3]==="=" && arr[4]===";" && arr[5]===" "){
        arr.splice(0,6);
        arr=arr.join('')
        localStorage.setItem('token',arr);
    }
    // console.log(document.cookie)
    
    return{
        type:'SET_TOKEN',
        token:(localStorage.getItem('token')==='' || localStorage.getItem('token')==='jwt=')?null:localStorage.getItem('token')
    }  
}

export const logout=function(){
    // console.log('logout called');
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
    // console.log("getUserDetails called");
    return (dispatch)=>{
        dispatch(getUserDetailsStart());
        axios({ method: 'GET', url: '/profile/userprofile' }).then((res) => {
            // console.log(res.data);
            let obj={
                _id:res.data._id,
                firstName:res.data.firstName,
                lastName:res.data.lastName,
                about:res.data.about===undefined?'':res.data.about ,
                dob:res.data.dob===undefined?'':res.data.dob,
                gender:res.data.gender===undefined?'':res.data.gender,
                city:res.data.city===undefined?'':res.data.city,
                state:res.data.state===undefined?'':res.data.state,
                profileImage:res.data.profileImage===undefined?'':res.data.profileImage,
                coverImage:res.data.coverImage===undefined?'':res.data.coverImage,
                friendsList:res.data.friendsList,
                requestList:res.data.requestList,
                requestSent:res.data.requestSent,
                role:res.data.role,
                profileCount:res.data.profileCount,
                designation:res.data.designation===undefined?'':res.data.designation,
                website:res.data.website===undefined?'':res.data.website
            }
            dispatch(getUserDetailsSuccess(obj));
        })
    }
    
}