<script setup lang="ts">
import v from '@/plugins/validate';
const { useForm, useField } = v;
const { errors, handleSubmit } = useForm({
  initialValues: {
    username: 'yly',
    password: '',
  },
  validationSchema: {
    username: v.yup.string().required().email().label('帐号'),
    password: { required: true },
  },
});
const { value: usernameValue } = v.useField('username', {}, { label: '账号' });
const { value: passwordValue } = useField('password', {}, { label: '密码' });
const onSubmit = handleSubmit((values) => {
  console.log(values);
  alert('验证通过');
});
</script>
<template>
  <div @submit="onSubmit">
    <input type="text" v-model="usernameValue" />
    <p class="error">{{ errors.username }}</p>
    <input type="text" v-model="passwordValue" />
    <p class="error">{{ errors.password }}</p>
  </div>
  <button type="submit">submit</button>
</template>
<style scoped lang="scss">
div {
  @apply flex w-screen h-screen justify-center bg-gray-200 items-center;
  input {
    @apply border-4 p-2 rounded-md focus:border-violet-500 outline-none;
  }
  .error {
    @apply text-red-600;
  }
}
</style>
