import React from 'react';
import Feed from './feed/feed';

const Allfeed = (props) => {
    console.log(props);
    let feed = null;
    console.log(props.role);
    // debugger

    console.log(props.allpost.length);
    // debugger
    console.log(props.allcomment)
    if(props.allpost.length!==0 && props.allcomment!==null ){
        

    feed = props.allpost.map((post) => {
        const arrayOfComment=props.allcomment.filter((eachcomment)=>{
            console.log("comparing ids of comment postid",eachcomment.postId===post._id)
           return String(eachcomment.postId)===String(post._id)
        })
        let isLiked=false;
        for(let i =0;i<post.likes.length;i++){
            if(props.profileId===post.likes[i]){
                isLiked=true;
            }
        }
        let isdisLiked=false;
        for(let i =0;i<post.dislikes.length;i++){
            if(props.profileId===post.dislikes[i]){
                isdisLiked=true;
            }
        }
        return <Feed isLiked={isLiked} isdisLiked={isdisLiked} flagged={props.flagged} key={post._id} role={props.role} img={post.image} createdBy={post.createdBy} likes={post.likes.length} 
                dislikes={post.dislikes.length} description={post.description}
                _id={post._id} createdOn={post.createdOn} arrayOfComment={arrayOfComment} ></Feed>
    })
    }
    return (
        <div>
            {feed}
        </div>
    );

}
export default Allfeed;