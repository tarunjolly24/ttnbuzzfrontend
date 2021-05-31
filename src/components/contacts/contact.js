import classes from './contact.module.css';
import Usercontact from './usercontact/usercontact';
import React, { useEffect, useState } from 'react';
import axios from '../../axios-instance';

const Contact = (props) => {
   const [inputShow,setinputshow]= useState(false);
   const [suggestions,setsuggestion]=useState([]);
   const [searchsuggestions,setsearchsuggestions]=useState([]);
   const inputHandler=()=>{
        setinputshow(!inputShow);
   }
   useEffect(()=>{
       console.log('get all friends')
       axios.get("/friends/getallfriends")
       .then((response)=>{
           console.log(response.data);
           if(Object.keys(response.data).length!==0)
           setsuggestion(response.data);
       })
   },[])
   
   let suggest=null;
   if(suggestions!=null){
       if(suggestions.length>0){
           suggest=suggestions.map((item)=>{
               return <Usercontact user={item} key={item._id} ></Usercontact>
           })
           
       }
       if(searchsuggestions.length>0){
        suggest=searchsuggestions.map((item)=>{
            return <Usercontact user={item} key={item._id} ></Usercontact>
        })
       }
   }
   

   const searchHandler=(e)=>{
       const output=[];
        console.log(e.target.value);
        for(let i=0;i<suggestions.length;i++){
            if(suggestions[i].firstName.toLowerCase().includes(e.target.value)===true ||  suggestions[i].lastName.toLowerCase().includes(e.target.value) === true){
                output.push(suggestions[i]);
            }
        }
        setsearchsuggestions(output);
        
   }

   const searchBox=!inputShow?null:<input type="text" className="form-control" placeholder="Search" onChange={(e)=>{searchHandler(e)}} ></input>;
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