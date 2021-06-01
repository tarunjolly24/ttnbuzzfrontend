import React, { useState } from 'react';
import { connect } from 'react-redux';
import classes from './addcomment.module.css';
import * as action from '../../../../store/action/index'
const Addcomment = (props) => {
    // console.log(props.postid)
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
        props.updatecurrentcomment({
            description:com.description,
            porstId:props.postid,
            profileId:props.userDetails,
            createdOn:new Date()
        });
        // console.log('action fired oncreatecomment')
        props.oncreateComment(data);
        
        setcom({
            description:''
        })
        // console.log(props.postid,com);
    }
    const commentHandler=(e)=>{
        // console.log(e.target.value)
        setcom({
            description:e.target.value,
        })
    }
    
    
    return (
        <div className={classes.search_container_flex}>
            <div className={classes.flex_con_one}>
                <img className={classes.user_image} src={props.userDetails!=null?props.userDetails.profileImage:''} alt="user"></img>
            </div>
            <div className={classes.flex_con_two}>
                <input className={classes.search_bar} type="text" placeholder="Write a comment..." value={com.description} onChange={(e)=>commentHandler(e)}></input>
            <button type="button" className={classes.addcommentbtn} onClick={addHandler}> <i class="fas fa-arrow-circle-right"></i> </button>
            </div>
        </div>
    )

}

const mapStateToProps=(state)=>{
    return{
        userDetails:state.auth.userDetails,
        profileID:state.auth.profileId,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        oncreateComment:(data)=>dispatch(action.createComment(data)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Addcomment);