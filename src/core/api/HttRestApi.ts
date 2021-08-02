import axios from "axios";

const API_REST_ENDPOINT_BASE = "http://localhost:3001";
const HttpRestApi = axios.create({
  baseURL: API_REST_ENDPOINT_BASE,
  timeout: 5000
});

export default HttpRestApi;
