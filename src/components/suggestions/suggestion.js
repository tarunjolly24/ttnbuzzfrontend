import classes from './suggestion.module.css';
import Usersuggestion from './usersuggestion/usersuggestion';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Suggestions = (props) => {
   const [inputShow,setinputshow]= useState(false);
   const [suggestions,setsuggestion]=useState([]);
   const inputHandler=()=>{
        setinputshow(!inputShow);
   }
   useEffect(()=>{
       axios.get("http://localhost:5000/friends/suggestions")
       .then((response)=>{
           console.log(response.data);
           
            if(Object.keys(response.data).length!==0)
                setsuggestion(response.data);
       })
   },[])
   let suggest=null;
   if(suggestions!=null){
       suggest=suggestions.map((item)=>{
           return <Usersuggestion></Usersuggestion>
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