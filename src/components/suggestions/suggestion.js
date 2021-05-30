import classes from './suggestion.module.css';
import Usersuggestion from './usersuggestion/usersuggestion';
import React, { useEffect, useState } from 'react';
import axios from '../../axios-instance';

const Suggestions = (props) => {
   const [inputShow,setinputshow]= useState(false);
   const [suggestions,setsuggestion]=useState([]);
   const inputHandler=()=>{
        setinputshow(!inputShow);
   }
   useEffect(()=>{
       axios.get("/friends/suggestions")
       .then((response)=>{
           console.log(response.data);
           
            if(Object.keys(response.data).length!==0)
                setsuggestion(response.data);
       })
   },[])
   const addfriendHandler=(receiverProfileId)=>{
    //action dispatch
    axios.post('http://localhost:5000/friends/sentrequest',{receiverProfileId:receiverProfileId})
    .then((res)=>{
        // console.log(res);
        const arr= suggestions.filter((item)=>{
           return item._id!==receiverProfileId
        })
        setsuggestion(arr);
    })
            
}

   let suggest=null;
   if(suggestions!=null){
       suggest=suggestions.map((item)=>{
           
           return <Usersuggestion addfriend={item} addfriendHandler={addfriendHandler} ></Usersuggestion>
       })
   }

   const searchBox=!inputShow?null:<input type="text" className="form-control" placeholder="Search"  ></input>;
    return (
        <div className={classes.suggestion}>
            <div className={classes.flexcontainer}>
                <div className={classes.flexitemone}><p>Suggestions</p></div>
                <div className={classes.flexitemtwo} onClick={inputHandler} ><i className="fas fa-search"></i></div>
            </div>
                {searchBox}
            <div className={classes.flexcontainertwo}>
                {/* <Usersuggestion></Usersuggestion>
                <Usersuggestion></Usersuggestion>
                <Usersuggestion></Usersuggestion>
                <Usersuggestion></Usersuggestion>
                <Usersuggestion></Usersuggestion>
                <Usersuggestion></Usersuggestion>
                <Usersuggestion></Usersuggestion>
                <Usersuggestion></Usersuggestion>
                <Usersuggestion></Usersuggestion> */}
                {suggest}
            </div>
        </div>
    )

}

export default Suggestions;