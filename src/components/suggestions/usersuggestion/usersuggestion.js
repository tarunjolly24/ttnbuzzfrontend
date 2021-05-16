import React from 'react';
import { Link } from 'react-router-dom';
import classes from './usersuggestion.module.css'
const Usersuggestion = (props) => {

    return (
        <div className={classes.usersuggestioncontainer}>
            <Link to="" className={classes.link_user}><img className={classes.user_image} src="./images/user.jpeg" alt="user"></img> <span >Tarun Jolly</span> </Link>
            <button className={classes.addfriendbtn}>+Friend</button>
        </div>
    )

}

export default Usersuggestion;