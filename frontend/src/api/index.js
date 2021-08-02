import axios_api from "axios";

let axiosConfig = {
  // xsrfCookieName: "csrftoken",
  // xsrfHeaderName: "X-XSRF-TOKEN",
  // withCredentials: true,
  baseURL: process.env.NODE_ENV == "development" ? "http://127.0.0.1:5000" : ""
};

let axios = axios_api.create(axiosConfig);

export default axios;
