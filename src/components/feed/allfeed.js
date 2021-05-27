import React, { useEffect, useState } from 'react';
import Feed from './feed/feed';
import axios from 'axios';
import { connect } from 'react-redux'
import * as action from '../../store/action/index';
import classes from './allfeed.module.css';
const Allfeed = (props) => {
    const [feed, setfeed] = useState([]);
    const [PageNumber,setPageNumber]=useState(0);
    useEffect(() => {
        props.ongetPost(0);
        props.ongetComment();
    }, [])

    const removePostFromCurrentStateOffeed=(postId)=>{
        let updatedfeed=feed.filter((post)=>{
          return post._id!==postId  
        })
        setfeed(updatedfeed);
    }

    useEffect(()=>{
        return ()=>{
            console.log("all feed component unmount");
            props.pagezeroaction();
        
        }
    },[])
    
    const { allpost } = props;
    useEffect(() => {
        setfeed(allpost);
        // debugger
    }, [allpost])

    const { flagged } = props;
    useEffect(() => {
        console.log(flagged);
        if (flagged === true) {
            axios.get('http://localhost:5000/post/getflagpost')
                .then((res) => {
                    console.log(res.data);
                    // setfeed([]);
                    setfeed(res.data);
                    // debugger
                })
        } else {
            // setfeed([]);
            setfeed(props.allpost);
            //action dispatch to set posts again in redux 
            // debugger
            
        }
    }, [flagged])
    console.log(feed)
    // debugger
    const loadMoreHandler=()=>{
        if(props.fetchMorePost){
        setPageNumber(PageNumber+1);
        props.ongetPost(PageNumber+1);
        }
    }
    let loadmorepostbtn=null;
    if(props.flagged==true){
        loadmorepostbtn=null;
    }else if(props.fetchMorePost===false){
        loadmorepostbtn=(
            <div style={{textAlign:'center'}} >All Post Are Loaded</div>
        )
    }else{
        loadmorepostbtn=(
            <div className={classes.divloadmorebutton} ><button onClick={loadMoreHandler} className={classes.loadmorebutton}> Load More post</button></div>

        )
    }

    let feedArray = null;

    if (feed.length !== 0 && props.allcomment !== null) {

        feedArray = feed.map((post) => {
            const arrayOfComment = props.allcomment.filter((eachcomment) => {
                // console.log("comparing ids of comment postid", eachcomment.postId === post._id)
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
            {loadmorepostbtn}
        </div>
    );

}

const mapStateToProps = (state) => {
    return {

        allpost: state.post.posts,
        allcomment: state.comment.comments,
        fetchMorePost:state.post.fetchMorePost


    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        ongetPost: (page) => dispatch(action.getPost(page)),
        ongetComment: () => dispatch(action.getComment()),
        pagezeroaction:()=>dispatch(action.pagezeroaction()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Allfeed);