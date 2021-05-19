import classes from './contact.module.css';
import Usercontact from './usercontact/usercontact';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Suggestions = (props) => {
   const [inputShow,setinputshow]= useState(false);
   const [suggestions,setsuggestion]=useState(null);
   const inputHandler=()=>{
        setinputshow(!inputShow);
   }
   useEffect(()=>{
       axios.get("http://localhost:5000/friends/suggestions")
       .then((response)=>{
           console.log(response.data);
           setsuggestion(response.data);
       })
   },[])
   let suggest=null;
   if(suggestions!=null){
       suggest=suggestions.map((item)=>{
           return <Usercontact></Usercontact>
       })
   }

   const searchBox=!inputShow?null:<input type="text" className="form-control" placeholder="Search"  ></input>;
    return (
        <div className={classes.suggestion}>
            <div className={classes.flexcontainer}>
                <div className={classes.flexitemone}><p>Contacts</p></div>
                <div className={classes.flexitemtwo} onClick={inputHandler} ><i className="fas fa-search"></i></div>
            </div>
                {searchBox}
            <div className={classes.flexcontainertwo}>
                
                {suggest}
            </div>
        </div>
    )

}

export default Suggestions;