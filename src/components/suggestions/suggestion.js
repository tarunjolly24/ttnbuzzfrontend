import classes from './suggestion.module.css';
import Usersuggestion from './usersuggestion/usersuggestion';
import React, { useState } from 'react';

const Suggestions = (props) => {
   const [inputShow,setinputshow]= useState(false);
   const inputHandler=()=>{
        setinputshow(!inputShow);
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
                <Usersuggestion></Usersuggestion>
                <Usersuggestion></Usersuggestion>
                <Usersuggestion></Usersuggestion>
                <Usersuggestion></Usersuggestion>
                <Usersuggestion></Usersuggestion>
                <Usersuggestion></Usersuggestion>
                <Usersuggestion></Usersuggestion>
                <Usersuggestion></Usersuggestion>
                <Usersuggestion></Usersuggestion>
            </div>
        </div>
    )

}

export default Suggestions;