import classes from './contact.module.css';
import Usercontact from './usercontact/usercontact';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Contact = (props) => {
   const [inputShow,setinputshow]= useState(false);
   const [suggestions,setsuggestion]=useState([]);
   const inputHandler=()=>{
        setinputshow(!inputShow);
   }
   useEffect(()=>{
       console.log('get all friends')
       axios.get("http://localhost:5000/friends/getallfriends")
       .then((response)=>{
           console.log(response.data);
           if(Object.keys(response.data).length!==0)
           setsuggestion(response.data);
       })
   },[])
   let suggest=null;
   if(suggestions!=null){
       suggest=suggestions.map((item)=>{
           return <Usercontact user={item}></Usercontact>
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

export default Contact;