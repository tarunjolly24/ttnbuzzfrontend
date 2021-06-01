import classes from './suggestion.module.css';
import Usersuggestion from './usersuggestion/usersuggestion';
import React, { useEffect, useState } from 'react';
import axios from '../../axios-instance';
import { ToastContainer, toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css';    


const Suggestions = (props) => {
    const [inputShow, setinputshow] = useState(false);
    const [suggestions, setsuggestion] = useState([]);
    const [searchsuggestions, setsearchsuggestions] = useState([]);

    const inputHandler = () => {
        setinputshow(!inputShow);
    }
    useEffect(() => {
        axios.get("/friends/suggestions")
            .then((response) => {
                console.log(response.data);

                if (Object.keys(response.data).length !== 0)
                    setsuggestion(response.data);
            })
    }, [])
    const searchHandler = (e) => {
        const output = [];
        console.log(e.target.value);
        for (let i = 0; i < suggestions.length; i++) {
            if (suggestions[i].firstName.toLowerCase().includes(e.target.value) === true || suggestions[i].lastName.toLowerCase().includes(e.target.value) === true) {
                output.push(suggestions[i]);
            }
        }
        setsearchsuggestions(output);

    }

    const addfriendHandler = (receiverProfileId) => {
        //action dispatch
        toast.success("Request Sent", { position: toast.POSITION.TOP_RIGHT,autoClose:1500,classOnClick:true,style:{backgroundColor:'#4D99FD'} })

        axios.post('/friends/sentrequest', { receiverProfileId: receiverProfileId })
            .then((res) => {
                // console.log(res);
                const arr = suggestions.filter((item) => {
                    return item._id !== receiverProfileId
                })
                setsuggestion(arr);
            })

    }

    let suggest = null;
    if (suggestions != null) {

        if (suggestions.length > 0) {

            suggest = suggestions.map((item) => {

                return <Usersuggestion addfriend={item} addfriendHandler={addfriendHandler} ></Usersuggestion>
            })
        }

        if(searchsuggestions.length>0){
            suggest = searchsuggestions.map((item) => {

                return <Usersuggestion addfriend={item} addfriendHandler={addfriendHandler} ></Usersuggestion>
            })
        }

    }
   



    const searchBox = !inputShow ? null : <input type="text" className="form-control" placeholder="Search" onChange={(e) => searchHandler(e)} ></input>;
    return (
        <div className={classes.suggestion}>
            <div className={classes.flexcontainer}>
                <div className={classes.flexitemone}><p>Suggestions</p></div>
                <div className={classes.flexitemtwo} onClick={inputHandler} ><i className="fas fa-search"></i></div>
            </div>
            {searchBox}
            <div className={classes.flexcontainertwo}>
                {/* <Usersuggestion></Usersuggestion>
                <Usersuggestion></Usersuggestion>
                <Usersuggestion></Usersuggestion>
                <Usersuggestion></Usersuggestion>
                <Usersuggestion></Usersuggestion>
                <Usersuggestion></Usersuggestion>
                <Usersuggestion></Usersuggestion>
                <Usersuggestion></Usersuggestion>
                <Usersuggestion></Usersuggestion> */}
                {suggest}
            </div>
            <ToastContainer />

        </div>
    )

}

export default Suggestions;