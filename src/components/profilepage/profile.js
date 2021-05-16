import axios from 'axios';
import React, { useEffect } from 'react';
import Navbar from '../navbar/navbar';
import Suggestions from '../suggestions/suggestion';
import classes from './profile.module.css';
import Userprofile from './userprofile/userprofile';
const Profile = (props) => {
    // useEffect(() => {
    //     axios({ method: 'GET', url: 'http://localhost:5000/profile/userprofile' }).then((res) => {
    //         console.log(res);
    //     })
    //     // console.log()
    // }
    // )
    // const submitHandler=()=>{
    // axios({method:'GET',url:'http://localhost:5000/profile/anyuserprofile?profileId=609af8556e7ed973e497d5b7'}).then((res)=>{
    //   console.log(res);
    // })
    // console.log()
//   }
    return (
        <div className={classes.profilecontainer}>
            <Navbar></Navbar>
            <div className={classes.profile_page_container}>
            <div className="row">
                <div className="col-9">
            <Userprofile></Userprofile>

                </div>
                <div className="col-3">
            <Suggestions></Suggestions>

                </div>
            </div>
            </div>
            
            {/* <button onClick={null}>get any profile</button> */}
        </div>
    )
}

export default Profile;