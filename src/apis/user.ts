import { http } from '@/plugins/axios';
export interface User {
  name: string;
  age: number;
  avatar: string;
}
function info() {
  return http.request<User>({
    url: 'info',
  });
}
interface userLogin {
  token: string;
}
function login(values: any) {
  return http.request<userLogin>({
    url: 'login',
    method: 'post',
  });
}
export default { info, login };
