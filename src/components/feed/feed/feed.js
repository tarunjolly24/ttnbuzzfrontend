import classes from './feed.module.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Addcomment from './addcomment/addcomment';
import Showcomment from './showcomment/showcomment';
import axios from 'axios';
const Feed = (props) => {
    const [likeon, setlikeon] = useState(false);
    const [dislikeon, setdislikeon] = useState(false);
    useEffect(() => {
        setdislikeon(props.isdisLiked);
        setlikeon(props.isLiked);
    }, [])

    const likeHandler = () => {
        //axios request and setlikeon
        if (likeon === false) {
            axios.post('http://localhost:5000/post/likepost', { postId: props._id })
                .then((res) => {
                    console.log(res);
                })

        }else{
            axios.post('http://localhost:5000/post/unlikepost', { postId: props._id })
                .then((res) => {
                    console.log(res);
                })
        }
        setlikeon(!likeon);
        if (dislikeon === true) {
            setdislikeon(!dislikeon);
        }

    }
    const dislikeHandler = () => {
        //axios request and setdislikeon
        if (dislikeon === false) {
            axios.post('http://localhost:5000/post/dislikepost', { postId: props._id })
                .then((res) => {
                    console.log(res);
                })

        }else{
            axios.post('http://localhost:5000/post/undislikepost', { postId: props._id })
                .then((res) => {
                    console.log(res);
                })
        }
        setdislikeon(!dislikeon);
        if (likeon === true) {
            setlikeon(!likeon);
        }
    }
    const commentHandler = () => {

    }

    let onlymoderator = null;
    console.log(props.flagged);
    if (props.role == 'admin' && props.flagged == true) {
        onlymoderator = (
            <React.Fragment>
                <button className={classes.spanone}><i class="fas fa-check-circle"></i></button>
                <button className={classes.spantwo}><i class="fas fa-flag"></i></button>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <div className={classes.feed_container}>
                <div className={classes.flex_container_one}>
                    <div className={classes.flex_item_one}>
                        <div className={classes.flex_inner_item}>
                            <div >
                                <img className={classes.user_image} src={props.createdBy.profileImage} alt="user"></img>
                            </div>
                            <div className={classes.flex_inner_one_container}>
                                <span>{props.createdBy.firstName + " " + props.createdBy.lastName}</span>
                                <span>{props.createdOn}</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.flex_item_two}>
                        {onlymoderator}

                        <button className={classes.spanthree}><i class="fas fa-ellipsis-h"></i></button>
                        <div>

                        </div>

                    </div>

                </div>
                <div className={classes.post_para}>
                    <p>{props.description}</p>
                </div>
                <div className={classes.post_image}>
                    {props.img == '' ? null : <img src={props.img} alt='post_image'></img>}
                </div>
                <div className={classes.flex_container_two}>
                    <div className={classes.flex2_item_one}>
                        <div><i className={props.isLiked === true ? ["far", "fa-thumbs-up", classes.islikedpost].join(' ') : ["far", "fa-thumbs-up"].join(' ')} style={{ backgroundColor: '#2DA3F3', padding: '5px', borderRadius: '50%', color: '#fff', margin: '5px' }} ></i>{props.likes}</div>
                        <div><i className="fas fa-heart-broken" style={{ backgroundColor: '#E92F58', padding: '5px', borderRadius: '50%', color: '#fff', margin: '5px' }}></i>{props.dislikes}</div>
                    </div>
                    <div className={classes.flex2_item_two}>
                        <div>{props.arrayOfComment.length}comment</div>
                    </div>
                </div>
                <hr></hr>
                <div className={classes.btn_container}>
                    <button type="button" onClick={likeHandler} className={classes.like_btn}><i className={likeon === true ? ["far", "fa-thumbs-up", classes.islikedpost].join(' ') : ["far", "fa-thumbs-up"].join(' ')}></i><span>Like</span></button>
                    <button type="button" onClick={dislikeHandler} className={classes.dislike_btn}><i className={dislikeon === true ? ["fas", "fa-heart-broken", classes.islikedpost].join(' ') : ["fas", "fa-heart-broken"].join(' ')} ></i><span>Dislike</span></button>
                    <button type="button" onClick={commentHandler} className={classes.comment_btn}><i className="far fa-comment-alt"></i><span>Comment</span></button>
                </div>
                <hr></hr>
                {console.log("array of comments", props.arrayOfComment)}
                <Showcomment comment={props.arrayOfComment}></Showcomment>
                <Addcomment postid={props._id}></Addcomment>




            </div>
        </React.Fragment>
    );

}
export default Feed;