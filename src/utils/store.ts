export const Constants = {
  ConsultNoteKey: (id: number | string) => (`ConsultNoteKey-${id}`),
}


interface IData {
  expire?: number;
  data: any;
}
export default {
  set(key: string, data: any, expire?: number) {
    let cache: IData = { data };
    if (expire) {
      cache.expire = Date.now() + expire * 1000;
    }
    localStorage.setItem(key, JSON.stringify(cache));
  },
  get(key: string): any | undefined {
    const cacheStore = localStorage.getItem(key);
    if (cacheStore) {
      const cache = JSON.parse(cacheStore);
      if (cache?.expire && cache.expire < Date.now()) {
        localStorage.removeItem(key);
        return;
      }
      return cache.data;
    }
  },
  remove(key: string) {
    localStorage.removeItem(key);
  }
};
