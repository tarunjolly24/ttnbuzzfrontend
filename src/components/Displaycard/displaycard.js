import classes from './displaycard.module.css';
import React from 'react';

const Displaycard=(props)=>{
    return(
        <React.Fragment>
            <div className={classes.display_container}>
                <div className={classes.cover_con} >
                    <img  src="./images/cover.jpg" alt="cover"></img>
                </div>
                <div className={classes.profile_con}>
                    <img src="./images/user.jpeg" alt="user"></img>
                </div>
                <div className={classes.text_con}>
                    <h5>Shekhar Agarwal</h5>
                    <p>Newly Recruit at TTN</p>
                    
                </div>
                <div className={classes.flex_con}>
                    <div className={classes.flex_one}>
                        <p>234</p>
                        <p className={classes.post_profile}>Profile Views</p>
                    </div>
                    <div className={classes.flex_two}>
                        <p>10</p>
                        <p className={classes.post_profile}>Post</p>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );

}

export default Displaycard;