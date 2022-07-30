import axios from 'axios'

// create instance from axios 
const fetcher = axios.create({
  baseURL : import.meta.env.VITE_API,
  timeout : 10000,
})
// Add a request interceptor
fetcher.interceptors.request.use(
  function (config) {
    // const token = getCookie("token");
    // if (token) {
    //   config.headers["Authorization"] = `Bearer ${token}`;
    // }
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
    return response;
  },
  async (error) => {
    if (
      error.response.data.statusCode === 401 &&
      error.response.data.error === "Token is not valid/expired."
    ) {
      // delCookie("token");
      delete fetcher.defaults.headers.common["Authorization"];
      window.location.reload()
    }
    return Promise.reject(error);
  }
);

export default fetcher
