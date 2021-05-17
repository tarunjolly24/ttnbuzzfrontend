


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
