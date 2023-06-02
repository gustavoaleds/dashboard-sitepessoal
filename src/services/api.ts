import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api'
});
// baseURL: 'https://json-server-648w.onrender.com/'
export default api;