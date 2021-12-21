import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        'Accept': 'application/json',
        'Content':'application/json'
    }
});

http.interceptors.request.use(config =>  {
    const token = localStorage.getItem('app_token');

    if (token) {
        config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
}, erro => {
    return Promise.reject(erro);
});

export default http;