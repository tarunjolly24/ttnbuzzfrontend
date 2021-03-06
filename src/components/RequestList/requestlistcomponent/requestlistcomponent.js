import React from 'react';
import { Link } from 'react-router-dom';
import classes from './requestlistcomponent.module.css';

const Requestlistcomponent = (props) => {
    // console.log("key",props.profileId)
    return (

        <React.Fragment>
            <div style={{ backgroundColor: '#fff', width: '200px' }}>
                <div className={classes.container_requestList}>
                    <div>
                        <img style={{ height: '50px', width: '50px' }} src={props.img} alt="img"></img>
                      <Link to={`/profile/${props.profileId}`} >  <p>{props.firstName + " " + props.lastName}</p></Link>
                    </div>
                    <div>
                        <button className={classes.acceptBtn} onClick={() => props.acceptRequestHandler(props.profileId)} >Accept</button>
                        <button className={classes.rejectBtn} onClick={() => props.rejectRequestHandler(props.profileId)}>Reject</button>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Requestlistcomponent;