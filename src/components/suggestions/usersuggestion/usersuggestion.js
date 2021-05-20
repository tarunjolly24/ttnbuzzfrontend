import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './usersuggestion.module.css'
const Usersuggestion = (props) => {


    
    return (
        <div className={classes.usersuggestioncontainer}>
            <Link to={`/profile/${props.addfriend._id}`} className={classes.link_user}><img className={classes.user_image} src={props.addfriend.profileImage} alt="user"></img> <span > {props.addfriend.firstName +" "+props.addfriend.lastName}</span> </Link>
            <button className={classes.addfriendbtn} onClick={()=>props.addfriendHandler(props.addfriend._id)} >+Friend</button>
        </div>
    )

}

export default Usersuggestion;