import React from 'react';
import Login from './login/login';
import Googlesignin from './googlesignin/googlesignin';
import classes from './loginpage.module.css';
const LoginPage=(props)=>{

    return(
        <React.Fragment>
        <div className={classes.loginpage_container}>
            <div className={classes.loginpage_flex_one}>
        <Googlesignin></Googlesignin>
            </div>
            <div className={classes.loginpage_flex_two}>
        <Login></Login>
            </div>
        </div>
        </React.Fragment>

    )


}

export default LoginPage;