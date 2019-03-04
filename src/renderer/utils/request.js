import axios from 'axios';
import Router from '../router';
if (process.env.NODE_ENV == 'development') {
  process.env.imgR = 'http://47.99.113.195:3000';
  // process.env.BASE_API = 'http://192.168.1.101:3000/api';
  process.env.BASE_API = 'http://47.99.113.195:3000/api';
} else {
  process.env.imgR = 'http://47.99.113.195:3000';
  // process.env.BASE_API = 'http://192.168.1.101:3000/api';
  process.env.BASE_API = 'http://47.99.113.195:3000/api';
}

// 创建axios实例
axios.defaults.withCredentials = true;     //为了跨域开发仍能保存session
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000, // 请求超时时间

});

// request拦截器
service.interceptors.request.use(config => {


  for (var item in config.data) {
    if (config.data[item] === '') {
      config.data[item] = null;
    }
    if (Array.isArray(config.data[item])) {
      if (config.data[item].length == 0) {
        config.data[item] = null;
      }
    }
  }
  for (var item in config.params) {
    if (config.params[item] === '') {
      config.params[item] = null;
    }
    if (Array.isArray(config.params[item])) {
      if (config.params[item].length == 0) {
        config.params[item] = null;
      }
    }
  }

  return config;
}, error => {
  // Do something with request error
  Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    if (error.response) {

      return Promise.reject(error.response.data);
    } else if (error.request) {
      // Message({
      //   message: '请求超时',
      //   type: 'error',
      //   duration: 2 * 1000
      // });
      return Promise.reject('请求超时');
    }
  }
);

export default service;
