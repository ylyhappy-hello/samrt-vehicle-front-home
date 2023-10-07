import { http } from '@/plugins/axios';

export const transportationNote = () => {
  return http.request<API.TransportNote[]>({
    url: 'motocycle/consult/list_five',
    method: 'get',
  })
}
