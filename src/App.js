
import './App.css';
import axios from 'axios';
import {Route,Switch} from 'react-router-dom';
import LoginPage from './components/loginpage/loginpage';
import Profile from './components/profilepage/profile'
import "bootstrap/dist/css/bootstrap.min.css";
axios.interceptors.request.use(config => {
  // perform a task before the request is sent
  console.log('Request was sent');
  let x=document.cookie.split('=')[1];
  config.headers.Authorization=x;
  console.log(config) 
  return config;
}, error => {
  // handle the error
  return Promise.reject(error);
});

function App() {
  
  // const x=document.cookie
  return (
    <div className="App">
      <Switch>
      <Route path='/profile' component={Profile}></Route>
      <Route path='/' component={LoginPage}></Route>
      </Switch>

    </div>
  );
}

export default App;
