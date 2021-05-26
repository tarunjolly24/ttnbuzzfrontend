import classes from './showcomment.module.css';
import React from 'react';

const Showcomment=(props)=>{
    console.log(props.comment);
    let showallcomment=props.comment.map((eachcomment)=>{
        return (
            <div className={classes.flex_con}>
                <div className={classes.flex_one} >
                    <img className={classes.usercommentprofileimg} src={eachcomment.profileId.profileImage} alt={"alt"}></img>
                </div>
                <div className={classes.flex_two}>
                <span> {eachcomment.profileId.firstName+" "+eachcomment.profileId.lastName}   </span>
               <span> {eachcomment.description}</span>

                </div>
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