import React from 'react';
import Navbar from '../navbar/navbar';
import Contact from '../contacts/contact';
import Suggestions from '../suggestions/suggestion';
import Search from '../search/search';
import Recent from '../recent/recent';
import Displaycard from '../Displaycard/displaycard';
import Allfeed from '../feed/allfeed';
import classes from './Home.module.css';
import { connect } from 'react-redux';
const Home = (props) => {
    

    return (
        <React.Fragment>
            <div className={classes.home_container}>
                <Navbar></Navbar>
                <div className="container-fluid" style={{padding:'40px'}} >
                    <div className="row">
                        <div className="col-3">
                            <Displaycard></Displaycard>
                            <Recent></Recent>

                        </div>

                        <div className="col-6">
                            <Search></Search>
                            <div style={{margin:'21px'}} >Sort by <strong>Top</strong><i className="fas fa-sort-down"></i></div>
                            <div>Moderator</div>
                            <Allfeed></Allfeed>

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
const mapStateToProps=(state)=>{
    return{
        userDetails:state.auth.userDetails
    }
}

export default  connect(mapStateToProps)(Home);