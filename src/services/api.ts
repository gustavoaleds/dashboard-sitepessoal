import axios from 'axios';

const api = axios.create({
    baseURL: 'https://json-server-648w.onrender.com/',
});

export default api;