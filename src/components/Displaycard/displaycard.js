import classes from './displaycard.module.css';
import React from 'react';
import { connect } from 'react-redux';

const Displaycard=(props)=>{
    return(
        <React.Fragment>
            <div className={classes.display_container}>
                <div className={classes.cover_con} >
                    <img  src={props.userDetails!=null?props.userDetails.coverImage:''} alt="cover"></img>
                </div>
                <div className={classes.profile_con}>
                    <img src={props.userDetails!=null?props.userDetails.profileImage:''} alt="user"></img>
                </div>
                <div className={classes.text_con}>
                    <h5>{props.userDetails!==null?props.userDetails.firstName +" "+props.userDetails.lastName:''}</h5>
                    <p>Newly Recruit at TTN</p>
                    
                </div>
                <div className={classes.flex_con}>
                    <div className={classes.flex_one}>
                        <p>234</p>
                        <p className={classes.post_profile}>Profile Views</p>
                    </div>
                    <div className={classes.flex_two}>
                        <p>10</p>
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