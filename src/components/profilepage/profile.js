// import axios from 'axios';
import React from 'react';
import Navbar from '../navbar/navbar';
import Suggestions from '../suggestions/suggestion';
import classes from './profile.module.css';
import Myprofile from './myprofile/myprofile';
import { useEffect } from 'react';
import { connect } from 'react-redux';
const Profile = (props) => {
    // console.log(props.userdetails);
    // useEffect(() => {

    //     // // console.log()
    //     props.getUserDetails();

    // },[])
    //     const submitHandler=()=>{
    //     axios({method:'GET',url:'http://localhost:5000/profile/anyuserprofile?profileId=609af8556e7ed973e497d5b7'}).then((res)=>{
    //       console.log(res);
    //     })
    //     console.log()
    //   }
    useEffect(() => {

    })
    return (
        <div className={classes.profilecontainer}>
            <Navbar></Navbar>
            <div className={classes.profile_page_container}>
                <div className="row">
                    <div className="col-9">
                        <Myprofile></Myprofile>
                        
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

const mapStateToProps = (state) => {
    return {
        // userdetails:state.auth.userDetails
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        // getUserDetails:()=>dispatch(actions.getUserDetails()),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);