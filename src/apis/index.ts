import { http } from '@/plugins/axios';
/**
 * 获取交通咨询列表
 * @returns 
 */
export const transportationNote = () => {
  return http.request<API.TransportNote[]>({
    url: 'motocycle/consult/list_five',
    method: 'get',
  })
}

