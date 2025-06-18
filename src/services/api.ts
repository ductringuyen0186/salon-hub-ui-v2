import axios from 'axios';
import { getAuthHeader } from '@/lib/auth';
import { mockApi, USE_MOCK_API } from './mockApi';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080/api';

const realApi = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth headers for real API
realApi.interceptors.request.use(
  (config) => {
    const authHeaders = getAuthHeader();
    Object.assign(config.headers, authHeaders);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Export either mock or real API based on configuration
const api = USE_MOCK_API ? mockApi : realApi;

export default api;