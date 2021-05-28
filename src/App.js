
import './App.css';
// import axios from 'axios';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import LoginPage from './components/loginpage/loginpage';
import Profile from './components/profilepage/profile'
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from 'react-redux';
import * as actions from './store/action/index';
import { useEffect } from 'react';
import Logout from './components/loginpage/logout/logout';
import Home from './components/Home/Home';
// axios.interceptors.request.use(config => {
//   // perform a task before the request is sent
//   console.log('Request was sent');
//   // let x = document.cookie.split('=')[1];
//   config.headers.Authorization = localStorage.getItem('token');
//   console.log(config)
//   return config;
// }, error => {
//   // handle the error
//   return Promise.reject(error);
// });



function App(props) {

  let { settoken,getUserDetails } = props;
  useEffect(() => {
    settoken();
    getUserDetails();
  }, [settoken,getUserDetails])
  
  const  unprotectedRoutes = (
    <Switch>
      <Route exact path='/' component={LoginPage}></Route>
      <Redirect to="/"></Redirect>
    </Switch>
  )
 
  const protectedRoutes = (
      <Switch>
        <Route path='/profile/:id' component={Profile}></Route>
        <Route path='/logout' component={Logout}></Route>
        <Route path='/feed' component={Home}></Route>
        <Redirect to='/feed'></Redirect>
      </Switch>
    )
  

  return (
    <div className="App">
      {props.isAuthenticated? protectedRoutes:unprotectedRoutes}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token != null,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    settoken: () => dispatch(actions.settoken()),
    getUserDetails:()=>dispatch(actions.getUserDetails()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
