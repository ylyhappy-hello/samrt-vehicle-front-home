import { ref } from "vue";

type MouseEventEnterHandler = Parameters<
  typeof HTMLElement.prototype.addEventListener<'mouseenter'>
>[1];
type MouseEventLeaveHandler = Parameters<
  typeof HTMLElement.prototype.addEventListener<'mouseleave'>
>[1];
//这个是 局部 自定义指令 v-hover
const vHoverFactory = (
  mouseenterHandler: MouseEventEnterHandler,
  mouselaeveHandler: MouseEventLeaveHandler
) => {
  return {
    beforeMount(el: HTMLElement) {
      el.addEventListener('mouseenter', mouseenterHandler as any);
      el.addEventListener('mouseleave', mouselaeveHandler as any);
    },
    beforeUnmount(el: HTMLElement) {
      el.removeEventListener('mouseenter', mouseenterHandler as any);
      el.removeEventListener('mouseleave', mouselaeveHandler as any);
    },
  };
};

// hover， mouseenter 设置传入变量为true, mouseleave 设置传入变量为false 
export const vHiddenHoverFactory = (flag: ReturnType<typeof ref>) => {
  return vHoverFactory(() => {
    flag.value = true
  }, () => {
    flag.value = false
  })
}

