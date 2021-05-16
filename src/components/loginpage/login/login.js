import React from 'react';
import classes from './login.module.css';

const login = (props) => {

    return (
        <React.Fragment>
            <div className={classes.login_container}>
                <h3 className={classes.login_head}>Login To Your Account</h3>
                <input className={classes.login_username} type="text" placeholder="TTN Username"></input>
                <input className={classes.login_password} type="password" placeholder="Password"></input>
                <div className={classes.login_inner_container}>
                    <div className={classes.flex_item_1}>
                        <input className={classes.login_checkbox} id="remember" type="checkbox"></input>
                        <label className={classes.login_label_remember} style={{fontSize:'13px'}} for="remember">Remember Me</label></div>
                    <div className={classes.flex_item_2}>Forgot Password</div>
                </div>
                <button className={classes.login_button} type="button">Sign in</button>
            </div>
        </React.Fragment>
    )

}

export default login;