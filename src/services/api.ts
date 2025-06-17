import axios from 'axios';

const API_BASE = import.meta.env.API_BASE || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;