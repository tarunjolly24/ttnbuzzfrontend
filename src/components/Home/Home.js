import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/navbar';
import Contact from '../contacts/contact';
import Suggestions from '../suggestions/suggestion';
import Search from '../search/search';
import Recent from '../recent/recent';
import Displaycard from '../Displaycard/displaycard';
import Allfeed from '../feed/allfeed';
import classes from './Home.module.css';
import { connect } from 'react-redux';
import * as action from '../../store/action/index';
import axios from 'axios';
const Home = (props) => {
    const [flagged, setflagged] = useState(false);
    console.log(props);

    let moderator = null;
    const moderatorviewHandler = () => {
        console.log(flagged);

        setflagged(!flagged);
        
    }
    
    if (props.userDetails !== null) {

        if (props.userDetails.role == 'admin') {

            moderator = (
                <div>
                    <label className={classes.switch}>
                        <input type="checkbox" checked={flagged} onChange={moderatorviewHandler} ></input>
                        <span className={[classes.slider, classes.round].join(' ')} >Moderator Only</span>
                    </label>
                </div>
            )
        }
    }

    return (
        <React.Fragment>
            <div className={classes.home_container}>
                <Navbar></Navbar>
                <div className="container-fluid" style={{ width:'95%',margin:'auto',marginTop:'40px' }} >
                    <div className="row">
                        <div className="col-3">
                            <Displaycard></Displaycard>
                            <Recent></Recent>
                        </div>

                        <div className="col-6">
                            <Search></Search>
                            <div className={classes.blabla}>
                                <div>Sort by <strong>Top</strong><i className="fas fa-sort-down"></i></div>
                                <div>
                                    {moderator}
                                </div>


                            </div>
                            
                            {/* allcomment={props.allcomment} allpost={feed.length > 0 ? feed : []} */}
                            <Allfeed profileId={props.profileId} flagged={flagged}  role={props.userDetails != null ? props.userDetails.role : ''}></Allfeed>

                        </div>

                        <div className="col-3">
                            <Contact></Contact>
                            <Suggestions></Suggestions>

                        </div>

                    </div>







                </div>
            </div>
        </React.Fragment>
    )

}
const mapStateToProps = (state) => {
    return {
        userDetails: state.auth.userDetails,
        // allpost: state.post.posts,
        // allcomment:state.comment.comments,
        profileId:state.auth.profileId

    }
}

export default connect(mapStateToProps)(Home);