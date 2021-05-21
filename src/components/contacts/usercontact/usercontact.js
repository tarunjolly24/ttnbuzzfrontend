import React from 'react';
import { Link } from 'react-router-dom';
import classes from './usercontact.module.css'
const UserContact = (props) => {

    return (
        <div className={classes.usersuggestioncontainer}>
            <Link to={`/profile/${props.user._id}`} className={classes.link_user}><img className={classes.user_image} src={props.user.profileImage} alt="user"></img> <span >{props.user.firstName+" "+props.user.lastName}</span> </Link>
        </div>
    )

}

export default UserContact;