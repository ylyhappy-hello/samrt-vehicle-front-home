import axios, { AxiosRequestConfig } from 'axios';

export class Axios {
  private instance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors();
  }
  public async request<T, D = ResponseResult<T>>(config: AxiosRequestConfig) {
    const {data} = await this.instance.request<D>(config);
    return data;
  }
  private interceptors() {
    this.interceptorsRequest();
    this.interceptorsResponse();
  }
  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
  private interceptorsResponse() {
    this.instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
}
