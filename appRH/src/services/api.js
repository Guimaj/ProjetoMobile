import axios from 'axios';

const api = axios.create({
    baseURL:"http://10.7.132.107:3333/"
});

export default api;