import axios, { AxiosInstance } from 'axios';

const API_URL = 'http://localhost:8800';

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
});

export default api;
