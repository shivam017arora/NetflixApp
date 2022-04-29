import axios from 'axios';
import configs from './config'
const TOKEN = configs.token;

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: TOKEN
    }
});

//instance.get('/foo-bar');
//https://api.themoviedb.org/3/foo-bar

export default instance;