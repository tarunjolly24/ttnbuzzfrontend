import axios from 'axios';
import React,{useState} from 'react';
import classes from './search.module.css';
import * as actions from '../../store/action/index';
import { connect } from 'react-redux';
const Search = (props) => {
    const [newpost,setnewpost]=useState({
        description:'',
        file:null,
    });
    const postHandler=(event,name)=>{
        console.log(event.target.value);
        console.log(event.target.files);
        if(name==="text"){
            setnewpost({
                ...newpost,
                description:event.target.value
            })
        }else if(name==="file"){
            setnewpost({
                ...newpost,
                file:event.target.files[0]
            })
        }
        console.log(newpost)

    }
    const createpostHandler=()=>{
        const formdata=new FormData();
        if(newpost.description!==''){
            formdata.append('description',newpost.description);
        }
        if(newpost.file!==null){
            formdata.append('image',newpost.file);
        }
        if(newpost.description!=='' || newpost.file!==null )
        props.oncreatePost(formdata);
        
        setnewpost({
        description:'',
            file:null,
        })

        // axios.post('http://localhost:5000/post/createpost',formdata,{
        //     headers: {
        //         'Accept': 'application/json',
        //       'Content-Type': 'multipart/form-data'
        //     }
        // })
        // .then((res)=>{
        //     setnewpost({
        //         description:'',
        //         file:null
        //     });
        //     console.log(res);
        // })

    }

    return (
        <React.Fragment>
            <div className={classes.search_container}>
                <div className={classes.search_container_flex}>
                    <div className={classes.flex_con_one}>
                        <img className={classes.user_image} src="./images/user.jpeg" alt="user"></img>
                    </div>
                    <div className={classes.flex_con_two}>
                        <input className={classes.search_bar} type="text" placeholder="Start a post..." onChange={(e)=>postHandler(e,"text")} value={newpost.description} ></input>
                    </div>
                    <div className={classes.flex_con_three}>
                        <label htmlFor="files" className={classes.gallery}><i className="fas fa-file-image"></i><span>Photo/Video</span></label>
                        <input id="files" style={{ display:'none' }} type="file" onChange={(e)=>postHandler(e,"file")}  ></input>
                    </div>
                    <button className={classes.submitBtn} onClick={createpostHandler}><i class="fas fa-arrow-circle-right"></i></button>
                </div>
            </div>
        </React.Fragment>
    )
}


const mapDispatchToProps=(dispatch)=>{
    return{
        oncreatePost:(formdata)=>dispatch(actions.createPost(formdata)),
    }
}

export default  connect(null,mapDispatchToProps)(Search);