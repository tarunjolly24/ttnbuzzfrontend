import classes from './showcomment.module.css';
import React, { useEffect } from 'react';
import {useState} from 'react';
import axios from 'axios';
const Showcomment=(props)=>{
    const [statecomment,setstatecomment]=useState([])

    // console.log(props.comment);
    const {postId}=props;
    useEffect(()=>{
        axios.post('http://localhost:5000/comment/getpostcomment',{postId:postId}).then((res)=>{
            setstatecomment(res.data);
        })
    },[postId])
    console.log(statecomment);
    // const printStateHandler=()=>{
    //     console.log(statecomment);
    // }

    let showallcomment=statecomment.map((eachcomment)=>{
        return (
            <div className={classes.flex_con}>
                <div className={classes.flex_one} >
                    <img className={classes.usercommentprofileimg} src={eachcomment.profileId.profileImage} alt={"alt"}></img>
                </div>
                <div className={classes.flex_two}>
                <span> {eachcomment.profileId.firstName+" "+eachcomment.profileId.lastName}   </span>
               <span> {eachcomment.description}</span>

                </div>
                {/* <button onClick={printStateHandler}> click me to see the state</button> */}
            </div>
        )
    })
    // console.log(showallcomment);
    return(
        <div>
        {showallcomment}
        </div>

    )
}
export default Showcomment;