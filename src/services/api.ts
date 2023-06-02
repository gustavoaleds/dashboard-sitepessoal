import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-site-pessoal-3qiz.onrender.com/api'
});
// baseURL: 'https://json-server-648w.onrender.com/'
export default api;