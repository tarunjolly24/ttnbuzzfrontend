import classes from './myprofile.module.css';
import React from 'react';


const Myprofile = (props) => {
    return (
        <div className={classes.userprofilecontainer}>
            <div>
                <div className={classes.cover_img_con}>
                    <img className={classes.cover_img} src="./images/cover.png" alt="cover"></img>
                </div>
                <div className={classes.profile_img_con}>
                    <img className={classes.profile_img} src="./images/user.jpeg" alt="profile"></img>
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
                <form>
                    <div className="row mb-4">
                        <div className="form-group col-md-4">
                            <label htmlFor="inputfirstname">First Name</label>
                            <input type="text" className="form-control py-3" id="inputfirstname" placeholder="First Name"></input>
                        </div>
                        <div className="form-group col-md-4">
                            <label  htmlFor="inputlastname">Last Name</label>
                            <input type="text" className="form-control py-3" id="inputlastname" placeholder="Last Name"></input>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="form-group col-md-4">
                            <label htmlFor="inputdob">DOB</label>
                            <input type="text" className="form-control py-3" id="inputdob" placeholder="DD/MM/YY"></input>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputPassword4">Gender</label><br></br>
                            <input type="radio" className="btn-check" name="options-outlined" id="success-outlined-1" autoComplete="off" ></input>
                            <label className="btn btn-outline-primary col-5 py-3" htmlFor="success-outlined-1" style={{ marginRight: '10px' }} >Male</label>
                            <input type="radio" className="btn-check" name="options-outlined" id="success-outlined-2" autoComplete="off" ></input>
                            <label className="btn btn-outline-primary col-5 py-3" htmlFor="success-outlined-2">Female</label>


                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="form-group col-md-4">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control py-3" id="inputCity"></input>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputCity">State</label>
                            <input type="text" className="form-control py-3" id="inputCity"></input>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ marginRight: '10px' }}>Save </button>
                    <button type="submit" className="btn border-primary" >Reset All</button>

                </form>
            </div>


        </div>
    );
}

export default Myprofile;
