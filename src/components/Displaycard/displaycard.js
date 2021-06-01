import classes from './displaycard.module.css';
import axios from '../../axios-instance';
import React, { useEffect,useState } from 'react';
import { connect } from 'react-redux';

const Displaycard=(props)=>{
    const [postcount,setpostcount]=useState(0);
    useEffect(()=>{
        axios.get('/post/postcount')
        .then((res)=>{
            // console.log(res.data.response);
            setpostcount(res.data.response);
        })
    },[])
    return(
        <React.Fragment>
            <div className={classes.display_container}>
                <div className={classes.cover_con} >
                    <img  src={props.userDetails!=null?"https://res.cloudinary.com/ddcgdnhqp/image/upload/v1622472572/z4odkrmkajufrfpsujrw.png":''} alt="cover"></img>
                </div>
                <div className={classes.profile_con}>
                    <img src={props.userDetails!=null?props.userDetails.profileImage:''} alt="user"></img>
                </div>
                <div className={classes.text_con}>
                    <h5>{props.userDetails!==null?props.userDetails.firstName +" "+props.userDetails.lastName:''}</h5>
                    <p>{props.userDetails!=null?(props.userDetails.designation===''?'':props.userDetails.designation+" at TTN"):''}</p>
                    
                </div>
                <div className={classes.flex_con}>
                    <div className={classes.flex_one}>
                        <p>{props.userDetails!=null?props.userDetails.friendsList.length:0}</p>
                        <p className={classes.post_profile}>My Friends</p>
                    </div>
                    <div className={classes.flex_two}>
                        <p>{postcount}</p>
                        <p className={classes.post_profile}>Post</p>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );

}

const mapStateToProps=(state)=>{
    return{
        userDetails:state.auth.userDetails
    }
}

export default connect(mapStateToProps)(Displaycard);