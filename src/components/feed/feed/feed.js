import classes from './feed.module.css';
import React, { useEffect, useState } from 'react';
import Addcomment from './addcomment/addcomment';
import Showcomment from './showcomment/showcomment';
import axios from '../../../axios-instance';
import { connect } from 'react-redux';
import * as action from '../../../store/action/index';
import Moment from 'react-moment'
const Feed = (props) => {
    // console.log(props.comment);
    const [likeon, setlikeon] = useState(false);
    const [dislikeon, setdislikeon] = useState(false);
    const [isAddCommentVisible, setisAddCommentVisible] = useState(false);
    const [isshowcomment, setisshowcomment] = useState(true);
    const [isshowreport, setisshowreport] = useState(false);

    const { isdisLiked, isLiked } = props;
    useEffect(() => {
        setdislikeon(isdisLiked);
        setlikeon(isLiked);
        // console.log("useEffect")
    }, [isdisLiked, isLiked])
    const likeHandler = () => {
        if (likeon === false) {
            props.likeaction(props._id,props.profileId);
        } else {
            props.unlikeaction(props._id,props.profileId);
        }
        setlikeon(!likeon);
        if (dislikeon === true) {
            setdislikeon(!dislikeon);
        }

    }
    const dislikeHandler = () => {
        //axios request and setdislikeon
        if (dislikeon === false) {

            props.dislikeaction(props._id,props.profileId);

        } else {

            props.undislikeaction(props._id,props.profileId);
        }
        setdislikeon(!dislikeon);
        if (likeon === true) {
            setlikeon(!likeon);
        }
    }
    const commentHandler = () => {
        setisAddCommentVisible(!isAddCommentVisible);
    }
    const ShowcommentHandler = () => {
        if(isshowcomment===true){
            setcurrentcomment({
                description:'',
                profileId:'',
                postId:''
            })
        }
        setisshowcomment(!isshowcomment);

    }
    const showreportoptionHandler = () => {
        if (props.flagged === false)
            setisshowreport(!isshowreport);
    }
    const reportPostHandler = (event, postId) => {
        event.stopPropagation();//no use

        axios.post('/post/flagpost', { postId: postId })
            .then((res) => {
                // console.log(res);

            })
            .catch((err) => {
                // console.log(err);
            })
        // props.functionRemovePostFromStateOfFeed(postId);

    }

    const unflagpostHandler = (postId) => {
        axios.post('/post/unflagpost', { postId: postId })
            .then((res) => {
                // console.log(res);
            })
            .catch((err) => {
                // console.log(err);
            })
        // props.functionRemovePostFromStateOfFeed(postId);

    }

    const deletepostHandler = (postId) => {
        axios.post('/post/deletepost', { postId: postId })
            .then((res) => {
                // console.log(res);
            })
            .catch((err) => {
                // console.log(err);
            })
        // props.functionRemovePostFromStateOfFeed(postId);

    }
    const [currentcomment,setcurrentcomment]=useState({
        description:'',
        profileId:'',
        postId:''
    })
    const updatecurrentcomment=(data)=>{
        setcurrentcomment(data);
    }
    let showcommentcomponent = null;
    if (isshowcomment) {
        showcommentcomponent = (
            <React.Fragment>
                <Showcomment currentcomment={currentcomment} postId={props._id} comment={props.comment}></Showcomment>
            </React.Fragment>
        )
    }

    let addcommentcomponent = null;
    if (isAddCommentVisible) {
        addcommentcomponent = (
            <React.Fragment>
                <Addcomment  updatecurrentcomment={updatecurrentcomment} postid={props._id}></Addcomment>
            </React.Fragment>
        )
    }

    let showreportoption = null;
    if (isshowreport && props.flagged !== true) {
        showreportoption = (
            <div onClick={(e) => reportPostHandler(e, props._id)} className={classes.reportdiv}>
                <span><i class="fas fa-exclamation-circle"></i></span><span>Report</span>
            </div>
        )
    }

    let onlymoderator = null;
    // console.log(props.flagged);
    if (props.role === 'admin' && props.flagged === true) {
        onlymoderator = (
            <React.Fragment>
                <button className={classes.spanone} onClick={() => unflagpostHandler(props._id)} ><i class="fas fa-check-circle"></i></button>
                <button className={classes.spantwo} onClick={() => deletepostHandler(props._id)} ><i class="fas fa-flag"></i></button>
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
                                <span><Moment fromNow>{props.createdOn}</Moment></span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.flex_item_two}>
                        {onlymoderator}

                        <button className={classes.spanthree} onClick={showreportoptionHandler}><i class="fas fa-ellipsis-h"></i></button>
                        {showreportoption}

                    </div>

                </div>
                <div className={classes.post_para}>
                    <p>{props.description}</p>
                </div>
                <div className={classes.post_image}>
                    {props.img === '' ? null : <img src={props.img} alt='post_image'></img>}
                </div>
                <div className={classes.flex_container_two}>
                    <div className={classes.flex2_item_one}>
                        <div><i className={props.isLiked === true ? ["far", "fa-thumbs-up", classes.islikedpost].join(' ') : ["far", "fa-thumbs-up"].join(' ')} style={{ backgroundColor: '#2DA3F3', padding: '5px', borderRadius: '50%', color: '#fff', margin: '5px' }} ></i>{props.likes}</div>
                        <div><i className="fas fa-heart-broken" style={{ backgroundColor: '#E92F58', padding: '5px', borderRadius: '50%', color: '#fff', margin: '5px' }}></i>{props.dislikes}</div>
                    </div>
                    <div className={classes.flex2_item_two}>
                        <button onClick={ShowcommentHandler} >comment</button>
                    </div>
                </div>
                <hr></hr>
                <div className={classes.btn_container}>
                    <button type="button" onClick={likeHandler} disabled={props.flagged} className={classes.like_btn}><i className={likeon === true ? ["fas", "fa-thumbs-up", classes.islikedpost].join(' ') : ["fas", "fa-thumbs-up"].join(' ')}></i><span>Like</span></button>
                    <button type="button" onClick={dislikeHandler} disabled={props.flagged} className={classes.dislike_btn}><i className={dislikeon === true ? ["fas", "fa-heart-broken", classes.isdislikedpost].join(' ') : ["fas", "fa-heart-broken"].join(' ')} ></i><span>Dislike</span></button>
                    <button type="button" onClick={commentHandler} className={classes.comment_btn}><i className="far fa-comment-alt"></i><span>Comment</span></button>
                </div>
                <hr></hr>
                {/* {console.log("array of comments", props.arrayOfComment)} */}
                {showcommentcomponent}
                {addcommentcomponent}




            </div>
        </React.Fragment>
    );

}
const mapStateToProps=(state)=>{
    return {
        profileId:state.auth.profileId,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        likeaction:(postId,profileId)=>dispatch(action.likeaction(postId,profileId)),
        unlikeaction:(postId,profileId)=>dispatch(action.unlikeaction(postId,profileId)),
        dislikeaction:(postId,profileId)=>dispatch(action.dislikeaction(postId,profileId)),
        undislikeaction:(postId,profileId)=>dispatch(action.undislikeaction(postId,profileId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Feed);