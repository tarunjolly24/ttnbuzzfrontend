import React from 'react';
import { connect } from 'react-redux';
const Otherprofile=(props)=>{
    console.log(props)
    // {debugger}
    let button=null;
    if(props.userDetails!=null){
        if(props.userDetails.friendsList.indexOf(props.showDetails._id)>-1){
            button=(
                <button type="button" >Remove Friend</button>
            )
        }else if(props.userDetails.requestList.indexOf(props.showDetails._id)>-1){
            button=(
                <div>
                <button type="button" >Accept Request</button>
                <button type="button" >Reject Request</button>
                </div>
            )
        }else if(props.userDetails.requestSent.indexOf(props.showDetails._id)>-1){
                button=(
                    <button type="button" disabled={true}>Pending</button>
                )
        }else{
            button=(
                <button type="button">Add Friend</button>
            )
        }
    }
    return(
        <React.Fragment>
        <div>
            <div>
                hey I am {props.showDetails.firstName+" "+props.showDetails.lastName}
            </div>
            <ul>
                <li>{props.showDetails.city}</li>
                <li>{props.showDetails.state}</li>
                <li>{props.showDetails.friendsList.length}</li>
                <li>{props.showDetails.city}</li>
                   {button} 
            </ul>
        </div>
        </React.Fragment>
    )

}

const mapStateToProps=(state)=>{
    return{
        userDetails:state.auth.userDetails,
    }
}

export default  connect(mapStateToProps)(Otherprofile);