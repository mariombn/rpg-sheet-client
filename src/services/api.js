import axios from 'axios';

const api = axios.create({
    //baseURL:'https://run.mocky.io/v3/'
    baseURL:'http://127.0.0.1:8000/api/v1/'
});

export default api;