import axios from "axios";
import {TokenService } from './token.service';
const instance = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken()
    console.log(token)
    if (token) {
      config.headers["Authorization"] = 'Bearer ' + token;  
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (originalConfig.url !== "/auth/login" && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        window.location.href = '/auth/login'
      }
    }

    return Promise.reject(err);
  }
);

export default instance;