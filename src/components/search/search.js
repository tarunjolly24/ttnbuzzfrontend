import React from 'react';
import classes from './search.module.css';

const Search = (props) => {
    return (
        <React.Fragment>
            <div className={classes.search_container_flex}>
                <div className={classes.flex_con_one}>
                    <img className={classes.user_image} src="./images/user.jpeg" alt="user"></img>
                </div>
                <div className={classes.flex_con_two}>
                    <input className={classes.search_bar} type="text" placeholder="Start a post..."></input>
                </div>
                <div className={classes.flex_con_three}>
                    <label htmlFor="files" className={classes.gallery}><i class="fas fa-file-image"></i><span>Photo/Video</span></label>
                    <input id="files" style={{ visibility: 'hidden' }} type="file"></input>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Search;