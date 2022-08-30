import { Axios } from './Axios';
const http = new Axios({
  baseURL: 'http://localhost:8080/api/',
  timeout: 10000,
  headers: {},
});

export { http };
