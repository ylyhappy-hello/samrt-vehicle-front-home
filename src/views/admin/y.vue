<script setup lang="ts">
import v from '@/plugins/validate';
import { email } from '@vee-validate/rules';
import { ref } from 'vue';
const { Field, Form, ErrorMessage } = v;
const account = ref('');
const onSubmit = () => {
  alert('submit');
};
</script>
<template>
  <div>
    <Form @submit="onSubmit">
      <Field
        name="account"
        label="账号"
        v-model="account"
        :rules="{ required: true, email }"
        #default="{ field }"
      >
      </Field>
      <ErrorMessage name="account" />
      <hr />
      <button class="p-1 bg-violet-500 rounded-sm text-white">提交表单</button>
    </Form>
  </div>
</template>
<style scoped lang="scss">
div {
  @apply flex w-screen h-screen justify-center bg-gray-200 items-center;
  input {
    @apply border-4 p-2 rounded-md focus:border-violet-500 outline-none;
  }
}
</style>
