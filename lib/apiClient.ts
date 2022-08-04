import Axios from "axios";

const API_PROTO = "http";
const API_HOSTNAME = "localhost";
const API_PORT = "3000";
const BACKEND_ENDPOINT = "api";
export const API_URL = `${API_PROTO}://${API_HOSTNAME}:${API_PORT}/${BACKEND_ENDPOINT}`;

const urls = {
  test: API_URL,
  development: API_URL,
  production: "https://production-url.com/",
};

// apiClient is Axios instance
export const apiClient = Axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
