/**
 * 
 * @param v 时间戳
 * @returns 月份-第几天 03-02 3月2号码
 */
export function timesimp2str(v: number) {
  const v1 = new Date(v);
  return (v1.getMonth() + 1 < 10 ? '0' + v1.getMonth() + 1 : v1.getMonth() + 1) + '-' + (v1.getDate() < 10 ? '0' + v1.getDate() : v1.getDate());
}

/**
 * 
 * @param v 时间戳
 * @returns 带上年份 月份-第几天 03-02 3月2号码
 */
export function timesimp2str2(v: number) {
  const v1 = new Date(v);
  return v1.getFullYear() +'-'+ (v1.getMonth() + 1 < 10 ? '0' + v1.getMonth() + 1 : v1.getMonth() + 1) + '-' + (v1.getDate() < 10 ? '0' + v1.getDate() : v1.getDate());
}
