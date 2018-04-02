import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://topten-7ff98.firebaseio.com/'
});

export default instance;
