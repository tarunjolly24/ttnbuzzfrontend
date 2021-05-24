import React from 'react';

const Showcomment=(props)=>{
    let showallcomment=props.comment.map((eachcomment)=>{
        return (
            <div>
                {eachcomment._id}
                {eachcomment.description}
            </div>
        )
    })
    console.log(showallcomment);
    return(
        <div>
        {showallcomment}
        </div>

    )
}
export default Showcomment;