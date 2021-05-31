import axios from '../../../axios-instance';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './otherprofile.module.css';
const Otherprofile = (props) => {
    console.log(props)
    const { showDetails } = props;
    useEffect(() => {
        console.log(showDetails._id);
        axios.post('/profile/profilecount', { receiverProfileId: showDetails._id })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }, [showDetails])
    const removeFriendHandler = (requestprofileId) => {

    }
    const acceptFriendHandler = (requestprofileId) => {
        axios.post('/friends/acceptrequest', { receiverProfileId: requestprofileId })
            .then((response) => {
                console.log(response);
                alert("Friend Request Accepted")
            })
    }
    const rejectFriendHandler = (requestprofileId) => {
        axios.post('/friends/rejectrequest', { receiverProfileId: requestprofileId })
            .then((response) => {
                console.log(response);
                alert("Friend Request Rejected");
            })
    }
    const addfriendHandler=(requestprofileId)=>{
        axios.post('/friends/sentrequest',{receiverProfileId:requestprofileId})
        .then((response)=>{
            console.log(response);
            alert("Request Sent");
        })
    }
    // {debugger}
    let button = null;
    if (props.userDetails != null) {
        if (props.userDetails.friendsList.indexOf(props.showDetails._id) > -1) {
            button = (
                <button className={classes.friend_btn} type="button" onClick={() => removeFriendHandler(showDetails._id)} > <i class="fas fa-user-minus"></i> Remove Friend</button>
            )
        } else if (props.userDetails.requestList.indexOf(props.showDetails._id) > -1) {
            button = (
                <React.Fragment>
                    <button type="button" className={classes.friend_btn} onClick={() => acceptFriendHandler(showDetails._id)} >Accept Request</button>
                    <button type="button" className={classes.friend_btn} onClick={() => rejectFriendHandler(showDetails._id)} >Reject Request</button>
                </React.Fragment>
            )
        } else if (props.userDetails.requestSent.indexOf(props.showDetails._id) > -1) {
            button = (
                <button type="button" disabled={true} className={classes.friend_btn}>Pending</button>
            )
        } else {
            button = (
                <button className={classes.friend_btn} type="button" onClick={()=>addfriendHandler(showDetails._id)} > <i class="fas fa-user-plus"></i> Add Friend</button>
            )
        }
    }
    return (
        <React.Fragment>
            <div className={classes.otherprofile_container}>
                <div className={classes.about_con}>
                    <p>  {props.showDetails.about} </p>
                </div>
                <div className={classes.details_con}>
                    <ul>
                        {props.showDetails.city !== '' ? <li> {props.showDetails.city}</li> : null}
                        {props.showDetails.state !== '' ? <li> {props.showDetails.state}</li> : null}
                        <li> {props.showDetails.friendsList.length} Friends</li>

                    </ul>
                </div>
                <div className={classes.btn_con}>
                    {button}
                    <button className={classes.visitwebsite_btn}><i class="fas fa-external-link-alt"></i> visit website</button>
                </div>
            </div>
        </React.Fragment>
    )

}

const mapStateToProps = (state) => {
    return {
        userDetails: state.auth.userDetails,
        profileId: state.auth.profileId
    }
}

export default connect(mapStateToProps)(Otherprofile);