import React from 'react';
import classes from './googlesignin.module.css';
require('dotenv').config();
const googlesignin=(props)=>{
    console.log(process.env.REACT_APP_API_URL);
    console.log(process.env);
    return(
        <React.Fragment>
          <div className={classes.google_container}>
              <div className={classes.google_inner_con}>
            <img className={classes.google_image} src="https://res.cloudinary.com/ddcgdnhqp/image/upload/v1621531019/ljnaki4v4mqhdmqv8vfs.jpg" alt="logo"></img>
            <p className={classes.google_head}>Enter Your Details and Start Your Journey with Us.</p>
            <p className={classes.google_para}>Don't stop until you're proud</p>
            {/* https://ttnbuzzapp.herokuapp.com/auth/google */}
            <a className={classes.google_sigin_button} href={`https://ttnbuzzapp.herokuapp.com/auth/google`}>Sign In with Google</a>  
            </div>
        </div>
        </React.Fragment>
    )

}

export default googlesignin;