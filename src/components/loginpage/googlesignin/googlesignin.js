import React from 'react';
import classes from './googlesignin.module.css';

const googlesignin=(props)=>{

    return(
        <React.Fragment>
          <div className={classes.google_container}>
              <div className={classes.google_inner_con}>
            <img className={classes.google_image} src="./images/TO-THE-NEW-logo.jpg" alt="logo"></img>
            <p className={classes.google_head}>Enter Your Details and Start Your Journey with Us.</p>
            <p className={classes.google_para}>Don't stop until you're proud</p>
            <a className={classes.google_sigin_button} href='http://localhost:5000/auth/google'>Sign In with Google</a>  
            </div>
        </div>
        </React.Fragment>
    )

}

export default googlesignin;