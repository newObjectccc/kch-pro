import Axios from 'axios';

const BASEURL_ENV_MAP = {
  production: 'http://47.108.164.241/api',
  development: 'http://129.28.157.168/api' // 'http://localhost/api'
};

const axios = Axios.create({
  baseURL: BASEURL_ENV_MAP[process.env.NODE_ENV ?? 'development']
});

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (!config.headers['Authorization'] && token) {
    config.headers['Authorization'] = token;
  }
  return config;
});

export default axios;
