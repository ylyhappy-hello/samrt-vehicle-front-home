interface IData {
  expire?: number;
  [key: string]: any;
}
export default {
  set(key: string, data: IData) {
    if (data.expire) {
      data.expire = Date.now() + data.expire * 1000;
    }
    localStorage.setItem(key, JSON.stringify(data));
  },
  get(key: string): IData | undefined {
    const item = localStorage.getItem(key);
    if (item) {
      const data = JSON.parse(item)
      if (data?.expire && data.expire < Date.now()) {
        localStorage.removeItem(key);
        return;
      }
      return data;
    }
  },
};
