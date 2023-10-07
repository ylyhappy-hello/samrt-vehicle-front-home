import { Axios } from './Axios';
const http = new Axios({
  baseURL: 'http://127.0.0.1:48080/admin-api',
  timeout: 10000,
  headers: {
    "tenant-id": 1,
  },
});

export { http };
