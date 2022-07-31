import axios from 'axios'
import Cookies from 'js-cookie';

// create instance from axios 
const fetcher = axios.create({
  baseURL : import.meta.env.VITE_API,
  timeout : 10000,
})
// Add a request interceptor
fetcher.interceptors.request.use(
  function (config) {
    const token = Cookies.get("token");
    if (token && config.headers) {
      config.headers["Authorization"] = `${token}`;
    }
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

fetcher.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    if (
      error.response.status === 401  && error.response.data === 'Unauthorized.'
      ) {
      Cookies.remove('token')
      delete fetcher.defaults.headers.common["Authorization"];
    }
    return Promise.reject(error);
  }
);

export default fetcher
