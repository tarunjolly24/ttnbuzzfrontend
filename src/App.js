
import './App.css';
import axios from 'axios';
import { Route, Switch,Link } from 'react-router-dom';
import LoginPage from './components/loginpage/loginpage';
import Profile from './components/profilepage/profile'
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from 'react-redux';
import * as actions from './store/action/auth';
import { useEffect } from 'react';
import Logout from './components/loginpage/logout/logout';
axios.interceptors.request.use(config => {
  // perform a task before the request is sent
  console.log('Request was sent');
  // let x = document.cookie.split('=')[1];
  config.headers.Authorization =localStorage.getItem('token');
  console.log(config)
  return config;
}, error => {
  // handle the error
  return Promise.reject(error);
});



function App(props) {

  // const x=document.cookie
  let {settoken}=props;
  useEffect(()=>{
    settoken();
  },[settoken])
  let routes=(
    <Switch>
    {/* <Route path='/profile' component={Profile}></Route> */}
    <Route path='/' component={LoginPage}></Route>
    </Switch>
  )
  if(props.isAuthenticated){
    routes=(
      <Switch>
      <Route path='/profile' component={Profile}></Route>
      <Route path='/logout' component={Logout}></Route>
      <Route path='/' component={LoginPage}></Route>
      </Switch>
    ) 
  }
  
  return (
    <div className="App">
      {routes}
      <Link to="/profile">cidkjhjd</Link>

    </div>
  );
}

const mapStateToProps=(state)=>{
  return{
    isAuthenticated: state.auth.token != null,
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    settoken:()=>dispatch(actions.settoken()),

  }
}

export default  connect(mapStateToProps,mapDispatchToProps)(App);
