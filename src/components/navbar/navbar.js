import React from 'react';
import { Link } from 'react-router-dom';
import classes from './navbar.module.css';

const Navbar=(props)=>{
   
    return(
        <React.Fragment>
        <div className="container-fluid" style={{backgroundColor:'#fff'}}>
            <div className="row">
                <div className="col-6">
                  <Link to="/">  <img className={classes.navbar_logo} src='./images/TO-THE-NEW-logo.jpg' alt="logo"></img></Link>
                </div>
                
                <div className="col-6">
                    <div className={classes.navbar_right_side}>
                    <Link to="/profile/609af8556e7ed973e497d5b7"className={classes.link_user}  ><img className={classes.user_image} src="./images/user.jpeg" alt="user"></img> <span >Tarun Jolly</span> </Link>
                    <Link to="/logout">Logout</Link>
                    <span className={classes.chat_icon}><i className="fab fa-facebook-messenger"></i></span>
                    <span className={classes.user_icon} ><i className="fas fa-user-check"></i></span>
                    </div>
                </div>

            </div>
        
        </div>
        </React.Fragment>
    )

}

export default Navbar;