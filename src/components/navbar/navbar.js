import React from 'react';
import { Link } from 'react-router-dom';
import classes from './navbar.module.css';
import { connect } from 'react-redux';
const Navbar = (props) => {

    return (
        <React.Fragment>
            <div className={classes.navbar_container}>
                <div className="container-fluid" style={{ backgroundColor: '#fff' }}>
                    <div className="row">
                        <div className="col-6">
                            <Link to="/">  <img className={classes.navbar_logo} src='https://res.cloudinary.com/ddcgdnhqp/image/upload/v1621531019/ljnaki4v4mqhdmqv8vfs.jpg' alt="logo"></img></Link>
                        </div>

                        <div className="col-6">
                            <div className={classes.navbar_right_side}>
                                <Link to={`/profile/${props.profileId}`} className={classes.link_user}  ><img className={classes.user_image} src={props.userDetails===null?'https://res.cloudinary.com/ddcgdnhqp/image/upload/v1621531829/uxz2n8ntfpk2typowdig.jpg':props.userDetails.profileImage} alt="user"></img> <span >{props.userDetails===null?"user name":props.userDetails.firstName+" "+props.userDetails.lastName}</span> </Link>
                                <Link to="/logout">Logout</Link>
                                <span className={classes.chat_icon}><i className="fab fa-facebook-messenger"></i></span>
                                <span className={classes.user_icon} ><i className="fas fa-user-check"></i></span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </React.Fragment>
    )

}

const mapStateToProps = (state) => {
    return {
        profileId: state.auth.profileId,
        userDetails:state.auth.userDetails
    }
}

export default connect(mapStateToProps)(Navbar);