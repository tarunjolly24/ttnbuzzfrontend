import classes from './showcomment.module.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from '../../../../axios-instance';
const Showcomment = (props) => {
    const [page, setpage] = useState(0);
    const [morecomment, setmorecomment] = useState(true);
    const [offset, setoffset] = useState(3);
    const [loading, setloading] = useState(false);
    const [statecomment, setstatecomment] = useState([])

    // console.log(props.comment);
    const { postId,comment } = props;
    // const {comments}=props;
    useEffect(() => {
        setstatecomment(comment);
        if(comment.length==0){
            setmorecomment(false);
        }
        // setloading(true);
        // axios.post('http://localhost:5000/comment/getpostcomment', { postId: postId, page: page, offset: offset }).then((res) => {
        //     setstatecomment(res.data);
        //     setloading(false);
        //     setpage(page + 1);
        //     setoffset(3);
        //     if(res.data.length==0)
        //     setmorecomment(false);
        // })

    }, [postId,comment])
    const {currentcomment}=props;
    useEffect(()=>{
        if(currentcomment.description!==''){
            setstatecomment([...statecomment,currentcomment]);
        }
    },[currentcomment])
    console.log(statecomment);
    // const printStateHandler=()=>{
    //     console.log(statecomment);
    // }

    const bringMorePost = () => {
        setloading(true);
        axios.post('/comment/getpostcomment', { postId: postId, page: page, offset: offset }).then((res) => {
            console.log(res.data);
            if (res.data.length == 0) {
                setmorecomment(false);
            }
            setstatecomment([...statecomment, ...res.data]);
            setloading(false);
            setpage(page + 1);
            setoffset(3);
        })
    }
    let loadmorecommentbutton = null;
    if (morecomment) {
        loadmorecommentbutton = (
            <button  onClick={bringMorePost} className={classes.loadmorecomment} ><i class="fas fa-chevron-down"></i> load comments </button>
        )
    } else {
        loadmorecommentbutton = null;
    }
    let showallcomment = null;
    if (loading) {

        showallcomment = (
            <div className={classes.loader}>Loading...</div>
        );
    }
    if (!loading) {
        showallcomment = statecomment.map((eachcomment) => {
            return (

                <div className={classes.flex_con}>
                    <div className={classes.flex_one} >
                        <img className={classes.usercommentprofileimg} src={eachcomment.profileId.profileImage} alt={"alt"}></img>
                    </div>
                    <div className={classes.flex_two}>
                        <span> {eachcomment.profileId.firstName + " " + eachcomment.profileId.lastName}   </span>
                        <span> {eachcomment.description}</span>

                    </div>


                </div>



            )
        })
    }
    // console.log(showallcomment);
    return (
        <div>
            {showallcomment}
            <div className={classes.button_container}>
                {loadmorecommentbutton}
            </div>
        </div>

    )
}
export default Showcomment;