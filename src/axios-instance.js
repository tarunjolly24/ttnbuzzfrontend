import axios from 'axios';

const instance= axios.create({
    baseURL:'http://localhost:5000/'
    // baseURL:'https://ttnbuzzbackend.el.r.appspot.com/'
})

instance.interceptors.request.use(config => {
    // perform a task before the request is sent
    console.log('Request was sent');
    // let x = document.cookie.split('=')[1];
    config.headers.Authorization = localStorage.getItem('token');
    console.log(config)
    return config;
  }, error => {
    // handle the error
    return Promise.reject(error);
  });

export default instance;