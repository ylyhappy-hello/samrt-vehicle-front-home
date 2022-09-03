import { defineStore } from 'pinia';
import userApi, { User } from '@/apis/user';
export default defineStore('user', {
  state: () => ({
    info: {} as null | User,
  }),
  actions: {
    async getUserInfo() {
      const res = await userApi.info();
      this.info = res.data;
    },
  },
});
