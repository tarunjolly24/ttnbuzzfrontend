import classes from './recent.module.css';
import React from 'react';

const Recent = (props) => {
    return (
        <React.Fragment>
            <div className={classes.recent_container}>
                <div>
                    <h6>Recent</h6>
                    <p><i class="fab fa-slack"></i>#javascript</p>
                    <p><i class="far fa-calendar-check"></i>Mobile Trends Conference 2021</p>
                    <p><i class="fas fa-user-friends"></i>Freelance Developers</p>
                    <p className={classes.showmore}><i class="fas fa-chevron-down"></i> show more</p>
                </div>
                <hr></hr>
                <div>
                    <h6>Groups</h6>
                    <p><i class="fab fa-slack"></i>#javascript</p>
                    <p><i class="far fa-calendar-check"></i>Mobile Trends Conference 2021</p>
                    <p><i class="fas fa-user-friends"></i>Freelance Developers</p>
                    <p className={classes.showmore}><i class="fas fa-chevron-down"></i> show 6 more</p>
                </div>
                <hr></hr>
                <div className={classes.flex_con_three}>
                    <h6>Subscriptions</h6>
                    <p><i class="fas fa-lightbulb"></i>Programming with Mosh</p>
                    <p><i class="fas fa-graduation-cap"></i>E-learning Bridge</p>
                    <p><i class="fas fa-gamepad"></i>Clever Programmer</p>
                    <p className={classes.showmore}><i class="fas fa-chevron-down"></i> show 6 more</p>
                </div>

            </div>
        </React.Fragment>
    );
}

export default Recent;