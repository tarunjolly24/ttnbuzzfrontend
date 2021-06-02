
import React, { useState } from 'react';
import classes from './search.module.css';
import * as actions from '../../store/action/index';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Search = (props) => {
    const [newpost, setnewpost] = useState({
        description: '',
        file: null,
    });
    const postHandler = (event, name) => {
        var isValid = ['image/png', 'image/jpg', 'image/jpeg'];
        // console.log(event.target.value);
        // console.log(event.target.files);
        if (name === "text") {
            setnewpost({
                ...newpost,
                description: event.target.value
            })
        } else if (name === "file") {
            // console.log(event.target.files[0].type);
            if (isValid.indexOf(event.target.files[0].type) > -1 && event.target.files[0].size<5120000 ) {
                setnewpost({
                    ...newpost,
                    file: event.target.files[0]
                })

            } else {
                toast.success("Not a Valid Image", { position: toast.POSITION.TOP_RIGHT, autoClose: 1500, classOnClick: true, style: { backgroundColor: 'red', fontWeight: 'bold' } })

            }
        }

        // console.log(newpost)

    }
    const createpostHandler = () => {

        const formdata = new FormData();
        if (newpost.description !== '') {
            formdata.append('description', newpost.description);
        }
        if (newpost.file !== null) {
            formdata.append('image', newpost.file);
        }

        if (newpost.description !== '' || newpost.file !== null) {
            toast.success("Posted Created", { position: toast.POSITION.TOP_RIGHT, autoClose: 1500, classOnClick: true, style: { backgroundColor: '#ffff00', fontWeight: 'bold' } })

            props.oncreatePost(formdata);

        } else {
            toast.success("Field Required", { position: toast.POSITION.TOP_RIGHT, autoClose: 1500, classOnClick: true, style: { backgroundColor: '#000', fontWeight: 'bold' } })

        }

        setnewpost({
            description: '',
            file: null,
        })



    }

    return (
        <React.Fragment>
          
            <div className={classes.search_container}>
                <div className={classes.search_container_flex}>
                    <div className={classes.flex_con_one}>
                        <img className={classes.user_image} src={props.userDetails !== null ? props.userDetails.profileImage : ''} alt="user"></img>
                    </div>
                    <div className={classes.flex_con_two}>
                        <input className={classes.search_bar} type="text" placeholder="Start a post..." onChange={(e) => postHandler(e, "text")} value={newpost.description} ></input>
                    </div>
                    <div className={classes.flex_con_three}>
                        <div>
                        <label htmlFor="files" className={classes.gallery}><i className="fas fa-file-image"></i><span>Photo/Video</span></label>
                        </div>
                        <div>
                        <input id="files" style={{ display: 'none' }} type="file" onChange={(e) => postHandler(e, "file")}  ></input>
                        </div>
                    </div>
                    <button className={classes.submitBtn} onClick={createpostHandler}><i className="fas fa-arrow-circle-right"></i></button>
                </div>
                <ToastContainer />
            </div>
            
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        userDetails: state.auth.userDetails
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        oncreatePost: (formdata) => dispatch(actions.createPost(formdata)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);