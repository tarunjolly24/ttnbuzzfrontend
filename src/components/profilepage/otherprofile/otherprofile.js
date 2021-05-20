import React from 'react';
const Otherprofile=(props)=>{

    return(
        <React.Fragment>
        <div>
            <div>
                hey I am 
            </div>
            <ul>
                <li>{props.showDetails.city}</li>
                <li>{props.showDetails.state}</li>
                <li>{props.showDetails.friendsList.length}</li>
                <li>{props.showDetails.city}</li>

            </ul>
        </div>
        </React.Fragment>
    )

}
export default Otherprofile;