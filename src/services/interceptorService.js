import axios from "axios";
// import notificationService from "./notificationService";
// import loader from "./loaderService";
import { backendUrl } from "../utils/credentials";
import { store } from "../index";
import { resetStore } from "../store/ducks/main";

const axiosInstance = axios.create({
  baseURL: `${backendUrl}school-lms-back/resources/school/`
});

let counter = 0;

axiosInstance.interceptors.request.use(
  async request => {
    if (++counter < 2) {
      // loader.start();
    }
    const data = JSON.parse(localStorage.getItem("authData"));
    if (data && data.accessToken) {
      request.headers.Authorization = "Bearer " + data.accessToken;
    }
    return request;
  },
  error => {
    // loader.stop();
    return Promise.reject({ ...error });
  }
);

axiosInstance.interceptors.response.use(
  response => {
    return onResponseFulfilled(response);
  },
  error => {
    return onResponseRejected(error);
  }
);

const onResponseFulfilled = response => {
  if (--counter < 1) {
    // loader.stop();
  }
  return response.data;
};

const onResponseRejected = error => {
  if (--counter < 1) {
    // loader.stop();
  }
  if (error.response.status === 408 || error.response.status === 504) {
    // notificationService.notify("error", "შეცდომა #" + error.response.status, "რექვესთს ვადა გაუვიდა");
  } else if (error.response.status === 404 || error.response.status === 504) {
    // notificationService.notify("error", "შეცდომა #" + error.response.status, "ვერ მოიძებნა");
  } else if (error.response.status === 500) {
    // notificationService.notify("error", "შეცდომა #" + error.response.status, "სისტეემაში დაფიქსირდა შეცდომა");
  }
  if (error.response.status === 401 || error.response.status === 404 || error.response.status === 403) {
    store.dispatch(resetStore());
    localStorage.setItem("authData", "");
    // navigationService.navigate("Login");
  }
  return Promise.reject({ ...error });
};

export default axiosInstance;
