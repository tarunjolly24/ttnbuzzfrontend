import classes from './myprofile.module.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import * as actions from '../../../store/action/auth';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router';

const Myprofile = (props) => {
    console.log(props);
    console.log(props.match.params.id);

    const [mydetails, setmydetails] = useState({
        _id:'',
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        city: '',
        state: '',
        profileImage: '',
        coverImage: '',
    });
    
    // console.log(mydetails);

    // console.log(props.userdetails);
    let {getProfile,userdetails,profiledetails,match}=props;
    useEffect(()=>{
        getProfile(match.params.id);
    },[getProfile,match]);

    
    useEffect(()=>{
        // console.log('userdetails',userdetails)
        // debugger
        if(profiledetails)
        setmydetails(profiledetails);

    },[profiledetails])
    
    
    const inputChangeHandler=(event,name)=>{
        console.log(event.target.value);
        switch(name){
            case 'firstName':
                setmydetails({...mydetails,firstName:event.target.value});
                break;
            case 'lastName':
                setmydetails({...mydetails,lastName:event.target.value});
                break;
            case 'dob':
                setmydetails({...mydetails,dob:event.target.value});
                break;  
            case 'checkboxone':
                setmydetails({...mydetails,gender:'male'});
                break;
            case 'checkboxtwo':
                setmydetails({...mydetails,gender:'female'});
                break;
            case 'city':
                setmydetails({...mydetails,city:event.target.value});
                break;
            case 'state':
                setmydetails({...mydetails,state:event.target.value});
                break;
                
            default:
                break;
        }

    }
    const saveDetailHandler=(e)=>{
        e.preventDefault();
        //api request to update the details
        axios.post('http://localhost:5000/profile/userprofileupdate',{updatedDetails:mydetails})
        .then((res)=>{
            console.log(res);
            alert('info updated')
        })
    }
    const resetHandler=()=>{
        setmydetails(props.userdetails);
    }


    return (
        <div className={classes.userprofilecontainer}>
            <div>
                <div className={classes.cover_img_con}>
                    <img className={classes.cover_img} src={mydetails.coverImage===''?'./images/cover.jpg':mydetails.coverImage} alt="cover"></img>
                </div>
                <div className={classes.profile_img_con}>
                    <img className={classes.profile_img} src={mydetails.profileImage===''?'./images/user.jpeg':mydetails.profileImage} alt="profile"></img>
                    <form className={classes.input_image}>
                        <label htmlFor="files" className="btn"><i className="fas  fa-camera fa-2x"></i></label>
                        <input id="files" style={{ visibility: 'hidden' }} type="file"></input>
                    </form>
                </div>
            </div>
            <div className={classes.user_name}>
                <h2>Tarun Jolly</h2>
            </div>
            <div className={classes.form_container}>
                {/* {form} */}
                <form onSubmit={saveDetailHandler}>
                    <div className="row mb-4">
                        <div className="form-group col-md-4">
                            <label htmlFor="inputfirstname">First Name</label>
                            {console.log(mydetails.firstName)}
                            <input type="text" className="form-control py-3" id="inputfirstname" placeholder="First Name" value={mydetails.firstName}  onChange={e=>inputChangeHandler(e,'firstName')} ></input>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputlastname">Last Name</label>
                            <input type="text" className="form-control py-3" id="inputlastname" placeholder="Last Name" value={mydetails.lastName} onChange={e=>inputChangeHandler(e,'lastName')}  ></input>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="form-group col-md-4">
                            <label htmlFor="inputdob">DOB</label>
                            <input type="text" className="form-control py-3" id="inputdob" placeholder="DD/MM/YY" value={mydetails.dob} onChange={e=>inputChangeHandler(e,'dob')}></input>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputPassword4">Gender</label><br></br>
                            <input type="radio" className="btn-check" name="options-outlined" id="success-outlined-1" autoComplete="off" checked={mydetails.gender==="male"} onChange={e=>inputChangeHandler(e,'checkboxone')} ></input>
                            <label className="btn btn-outline-primary col-5 py-3" htmlFor="success-outlined-1" style={{ marginRight: '10px' }} >Male</label>
                            <input type="radio" className="btn-check" name="options-outlined" id="success-outlined-2" autoComplete="off" checked={mydetails.gender==="female"} onChange={e=>inputChangeHandler(e,'checkboxtwo')} ></input>
                            <label className="btn btn-outline-primary col-5 py-3" htmlFor="success-outlined-2">Female</label>


                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="form-group col-md-4">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control py-3" id="inputCity" value={mydetails.city} onChange={e=>inputChangeHandler(e,'city')}></input>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">State</label>
                            <input type="text" className="form-control py-3" id="inputState" value={mydetails.state} onChange={e=>inputChangeHandler(e,'state')}></input>
                        </div>
                    </div>
                    <button  className="btn btn-primary" style={{ marginRight: '10px' }}>Save </button>
                    <button type="button" className="btn border-primary" onClick={resetHandler} >Reset All</button>

                </form>
            </div>


        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        userdetails: state.auth.userDetails,
        loading: state.auth.loading,
        profiledetails:state.profile.profileDetails
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        getProfile: (profileId) => dispatch(actions.getProfile(profileId)),
    }

}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Myprofile));