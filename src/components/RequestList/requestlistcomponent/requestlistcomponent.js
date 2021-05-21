import React from 'react';
import classes from './requestlistcomponent.module.css';

const Requestlistcomponent=(props)=>{
    // console.log("key",props.profileId)
    return(
        
        <React.Fragment>
        <div style={{backgroundColor:'#fff'}}>
            <div>
                <img style={{height:'50px',width:'50px'}} src={props.img} alt="img"></img>
            </div>
            <div>
                <span>{props.firstName+" "+props.lastName}</span>
                <button onClick={()=>props.acceptRequestHandler(props.profileId)} >Accept</button>
                <button onClick={()=>props.rejectRequestHandler(props.profileId)}>Reject</button>

            </div>
        </div>
        </React.Fragment>
    )
}

export default Requestlistcomponent;