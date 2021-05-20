import classes from './feed.module.css';
import React from 'react';
import { Link } from 'react-router-dom'
const Feed = (props) => {

    return (
        <React.Fragment>
            <div className={classes.feed_container}>
                <div className={classes.flex_container_one}>
                    <div className={classes.flex_item_one}>
                        <div className={classes.flex_inner_item}>
                            <div >
                                <img className={classes.user_image} src="./images/user.jpeg" alt="user"></img>
                            </div>
                            <div className={classes.flex_inner_one_container}>
                                <span>Tarun Jolly</span>
                                <span>11 November 2021</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.flex_item_two}><i class="fas fa-ellipsis-h"></i>
                
                    </div>

                </div>
                <div className={classes.post_para}>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text . </p>
                </div>
                <div className={classes.post_image}>
                    <img src='./images/cover.jpg' alt='post_image'></img>
                </div>
                <div className={classes.flex_container_two}>
                    <div className={classes.flex2_item_one}>
                        <div><i className="far fa-thumbs-up" style={{ backgroundColor: '#2DA3F3', padding: '5px', borderRadius: '50%', color: '#fff', margin: '5px' }} ></i>1</div>
                        <div><i className="fas fa-heart-broken" style={{ backgroundColor: '#E92F58', padding: '5px', borderRadius: '50%', color: '#fff', margin: '5px' }}></i>2</div>
                    </div>
                    <div className={classes.flex2_item_two}>
                        <div>1 comment</div>
                    </div>
                </div>
                <hr></hr>
                <div className={classes.btn_container}>
                    <button type="button" className={classes.like_btn}><i className="far fa-thumbs-up"></i><span>Like</span></button>
                    <button type="button" className={classes.dislike_btn}><i className="fas fa-heart-broken"></i><span>Dislike</span></button>
                    <button type="button" className={classes.comment_btn}><i className="far fa-comment-alt"></i><span>Comment</span></button>

                </div>
                <hr></hr>
                <div className={classes.search_container_flex}>
                    <div className={classes.flex_con_one}>
                        <img className={classes.user_image} src="./images/user.jpeg" alt="user"></img>
                    </div>
                    <div className={classes.flex_con_two}>
                        <input className={classes.search_bar} type="text" placeholder="Write a comment..."></input>
                    </div>
                </div>




            </div>
        </React.Fragment>
    );

}
export default Feed;