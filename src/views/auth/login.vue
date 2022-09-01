<script setup lang="ts">
import { useRouter } from 'vue-router'
import v from '@/plugins/validate';
import userApi from '@/apis/user'
import { store } from '@/utils'
const { Form, Field, ErrorMessage } = v;
const schema = {
  account: { required: true, email: true },
  password: { required: true, min: 8, max: 20 },
};
const router = useRouter();
async function onSubmit(values: any) {
  console.log("values", values)
  // const { data: { token } } = await userApi.login(values)
  const { data: { token }, type } = await userApi.login()
  store.set('token', {
    expire: 360000,
    token
  })
  if (type == 'success') {
    console.log("执行路由跳转")
    router.push({ name: 'home' })
  }
}
</script>
<template>
  <Form @submit="onSubmit" :validation-schema="schema" #default="{ errors }"
    class="bg-slate-300 h-screen flex justify-center items-start md:items-center p-5 ">
    <div class="w-[720px] translate-y-32 md:translate-y-0 bg-white md:grid grid-cols-2 rounded-md overflow-hidden shadow-md ">
      <div class="p-6">
        <h2 class="text-center text-gray-700 text-2xl font-bold mt-5">
          会员登录
        </h2>
        <div class="mt-8 flex flex-col justify-between">
          <div>
            <Field name="account" label="账号" value="y@y.com" class="y-input" placeholder="请输入账号" />
            <!-- 我感觉自定义rule比较好 -->
            <!-- <div v-if="errors.account" class="y-error">请输入正确的邮箱</div> -->
            <ErrorMessage name="account" as="div" class="y-error" />
            <Field name="password" label="密码" value="admin888" class="y-input mt-5" placeholder="请输入密码" type="password" />
            <ErrorMessage name="password" as="div" class="y-error" />
            <YButton class="mt-5">登录</YButton>
            <div class="flex justify-center mt-2">
              <i class="fab fa-weixin bg-green-600 text-white rounded-xl p-1 cursor-pointer"></i>
            </div>
          </div>
          <div class="flex space-x-6 justify-center mt-5">
            <YA href="">网站首页</YA>
            <YA href="">会员注册</YA>
            <YA href="">找回密码</YA>
          </div>
        </div>
      </div>
      <div class="hidden md:block relative">
        <img class="absolute w-full object-cover" src="/images/login.jpg" />
      </div>
    </div>
  </Form>
</template>
<style scoped lang="scss">
</style>
<script lang="ts">
export default {
  route: { name: 'login' }
}
</script>
