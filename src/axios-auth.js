import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://banktoday.herokuapp.com/api/v1/'
});

export default instance;
