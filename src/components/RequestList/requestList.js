import axios from 'axios';
import React, { useEffect, useState } from 'react';
import classes from './requestList.module.css';
import Requestlistcomponent from './requestlistcomponent/requestlistcomponent';
const RequestList=(props)=>{
    
    const [allrequest,setallrequest]=useState([]);
    const acceptRequestHandler=(requestprofileId)=>{
        axios.post('http://localhost:5000/friends/acceptrequest',{receiverProfileId:requestprofileId})
        .then((response)=>{
            console.log(response);
            const arr=allrequest.filter((item)=>{
                return item._id!==requestprofileId;
            })
            setallrequest(arr);
        })
    }
    const rejectRequestHandler=(requestprofileId)=>{
            axios.post('http://localhost:5000/friends/rejectrequest',{receiverProfileId:requestprofileId})
            .then((response)=>{
                console.log(response);
                const arr=allrequest.filter((item)=>{
                    return item._id!==requestprofileId;
                })
                console.log(arr);
                setallrequest(arr);
            })
    }

    

    useEffect(()=>{
        axios.get('http://localhost:5000/friends/friendrequest')
        .then((resposne)=>{
            console.log(resposne.data);
            if(resposne.data.length!==0){
                setallrequest(resposne.data);
            }
        })
    },[])
    let requestlistcomponent="Loading";
    if(allrequest.length!==0){
       requestlistcomponent=allrequest.map((eachrequest)=>{
           console.log(eachrequest);
           return <Requestlistcomponent acceptRequestHandler={acceptRequestHandler} rejectRequestHandler={rejectRequestHandler} key={eachrequest._id} profileId={eachrequest._id} img={eachrequest.profileImage} firstName={eachrequest.firstName} lastName={eachrequest.lastName}  ></Requestlistcomponent> 
        
        })
    }

    return(
        <React.Fragment>
            <div className={classes.friendlist_container}>
                {requestlistcomponent}
            </div>
        </React.Fragment>

    )
}

export default RequestList;