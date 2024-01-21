import axios, { type AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  responseType: "json"
});

export default api;
