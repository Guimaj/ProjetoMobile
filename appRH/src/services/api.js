import axios from 'axios';

const api = axios.create({
    baseURL:"http://10.102.6.126:3333/"
});

export default api;