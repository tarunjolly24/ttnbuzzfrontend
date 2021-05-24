import React, { useState } from 'react';
import { connect } from 'react-redux';
import classes from './addcomment.module.css';
import * as action from '../../../../store/action/index'
const Addcomment = (props) => {
    console.log(props.postid)
    const [com,setcom]=useState({
        description:''
    });
    const addHandler=()=>{
        // event.preventDefault();
        let data={
            description:com.description,
            postId:props.postid,
            profileId:props.profileID,


        }
        console.log('action fired oncreatecomment')
        props.oncreateComment(data);
        setcom({
            description:''
        })
        // console.log(props.postid,com);
    }
    const commentHandler=(e)=>{
        console.log(e.target.value)
        setcom({
            description:e.target.value,
        })
    }
    
    
    return (
        <div className={classes.search_container_flex}>
            <div className={classes.flex_con_one}>
                <img className={classes.user_image} src="./images/user.jpeg" alt="user"></img>
            </div>
            <div className={classes.flex_con_two}>
                <input className={classes.search_bar} type="text" placeholder="Write a comment..." value={com.description} onChange={(e)=>commentHandler(e)}></input>
            <button type="button" onClick={addHandler}>click me </button>
            </div>
        </div>
    )

}

const mapStateToProps=(state)=>{
    return{
        profileID:state.auth.profileId,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        oncreateComment:(data)=>dispatch(action.createComment(data)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Addcomment);