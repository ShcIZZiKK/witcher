<template>
  <div class="h-100">
    <authorization-app />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AuthorizationApp from "@/components/AuthorizationApp/AuthorizationApp.vue";

export default defineComponent({
  name: "LoginPage",

  components: {
    AuthorizationApp,
  },
});
</script>
