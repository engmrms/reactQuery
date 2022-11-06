/* eslint-disable complexity */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/unbound-method */

import axios from "axios";

import { StatusCodes } from "../../Models/enums";

export interface CommonHeaderProperties {
  "Content-Type": string | null;
}

const Axios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

// (Axios.defaults.headers as Record<string, CommonHeaderProperties>).post["Content-Type"] = "multipart/form-data";
Axios.defaults.headers.common.withCredentials = true;

Axios.interceptors.response.use(undefined, error => {
  const serverDown =
    (error.response && error.response.status === StatusCodes.ServerUnavailable) ||
    (error.response && error.response.status === StatusCodes.InternalServerError);

  const unauthorized = error.response && error.response.status === StatusCodes.Unauthorized;

  // if (unauthorized) window.location.href = "/login";
  if (serverDown) window.location.href = "/error";
  return Promise.reject(error.response);
});

export default Axios;
