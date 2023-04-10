<template>
  <v-form class="pt-2" v-model="form" @submit.prevent="onSubmit">
    <v-text-field
      v-model="email"
      :readonly="loading"
      :rules="[required]"
      class="mb-2"
      clearable
      label="Логин"
      variant="outlined"
    ></v-text-field>

    <v-text-field
      v-model="password"
      :readonly="loading"
      :rules="[required]"
      clearable
      label="Пароль"
      variant="outlined"
    ></v-text-field>

    <v-btn
      :disabled="!form"
      :loading="loading"
      block
      color="red"
      size="large"
      type="submit"
      variant="elevated"
      class="mt-2"
    >
      Регистрация
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "RegistrationForm",

  emits: ["submit"],

  setup(props, { emit }) {
    const form = ref(null);
    const email = ref(null);
    const password = ref(null);
    const loading = ref(false);

    const onSubmit = () => {
      if (!form.value) {
        return;
      }

      loading.value = true;

      setTimeout(() => {
        loading.value = false;
        emit("submit");
      }, 2000);
    };

    const required = (v: string) => {
      return !!v || "Поле обязательное";
    };

    return {
      form,
      email,
      password,
      loading,
      onSubmit,
      required,
    };
  },
});
</script>
