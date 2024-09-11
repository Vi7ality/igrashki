import axios, { AxiosInstance } from 'axios';

const API_URL = 'https://grow-with-you-api.onrender.com';

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
});

export default api;
