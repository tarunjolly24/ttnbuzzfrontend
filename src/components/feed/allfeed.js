import React, { useEffect, useState } from 'react';
import Feed from './feed/feed';
import axios from 'axios';
import { connect } from 'react-redux'
import * as action from '../../store/action/index';
const Allfeed = (props) => {
    const [feed, setfeed] = useState([]);
    useEffect(() => {
        props.ongetPost();
        props.ongetComment();
    }, [])

    const removePostFromCurrentStateOffeed=(postId)=>{
        let updatedfeed=feed.filter((post)=>{
          return post._id!==postId  
        })
        setfeed(updatedfeed);
    }

    const { allpost } = props;
    useEffect(() => {
        setfeed(allpost);
    }, [allpost])

    const { flagged } = props;
    useEffect(() => {
        console.log(flagged);
        if (flagged === true) {
            axios.get('http://localhost:5000/post/getflagpost')
                .then((res) => {
                    // console.log(res.data);
                    setfeed(res.data);
                })
        } else {
            props.ongetPost();
        }
    }, [flagged])


    let feedArray = null;

    if (feed.length !== 0 && props.allcomment !== null) {

        feedArray = feed.map((post) => {
            const arrayOfComment = props.allcomment.filter((eachcomment) => {
                console.log("comparing ids of comment postid", eachcomment.postId === post._id)
                return String(eachcomment.postId) === String(post._id)
            })
            let isLiked = false;
            for (let i = 0; i < post.likes.length; i++) {
                if (props.profileId === post.likes[i]) {
                    isLiked = true;
                    break;
                }
            }
            let isdisLiked = false;
            for (let i = 0; i < post.dislikes.length; i++) {
                if (props.profileId === post.dislikes[i]) {
                    isdisLiked = true;
                    break;
                }
            }
            return <Feed functionRemovePostFromStateOfFeed={removePostFromCurrentStateOffeed} isLiked={isLiked} isdisLiked={isdisLiked} flagged={props.flagged} key={post._id} role={props.role} img={post.image} createdBy={post.createdBy} likes={post.likes.length}
                dislikes={post.dislikes.length} description={post.description}
                _id={post._id} createdOn={post.createdOn} arrayOfComment={arrayOfComment} ></Feed>
        })
    }
    return (
        <div>
            {feedArray}
        </div>
    );

}

const mapStateToProps = (state) => {
    return {

        allpost: state.post.posts,
        allcomment: state.comment.comments,


    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        ongetPost: () => dispatch(action.getPost()),
        ongetComment: () => dispatch(action.getComment()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Allfeed);