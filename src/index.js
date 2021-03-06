import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import authReducer from './store/reducer/auth';
import postReducer from './store/reducer/post';
import profileReducer from './store/reducer/profile';
import commentReducer from './store/reducer/comment'
import thunk from 'redux-thunk';
const composeEnhancers = process.env.NODE_ENV==='development'?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :null|| compose;
const rootReduer=combineReducers({
  post:postReducer,
  auth:authReducer,
  profile:profileReducer,
  comment:commentReducer
});
const store=createStore(rootReduer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
