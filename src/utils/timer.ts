export function resetTimer(func: Function, timeSub = 1000) {
  let timer: any = null;

  return () => {
    if (timer != null) {
      clearInterval(timer);
      timer = setInterval(func, timeSub);
    } else {
      timer = setInterval(func, timeSub);
    }
  };
}
