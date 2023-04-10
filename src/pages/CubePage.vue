<template>
  <div class="h-100">
    <cube-app />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CubeApp from "@/components/CubeApp/CubeApp.vue";

export default defineComponent({
  name: "CubePage",

  components: {
    CubeApp,
  },
});
</script>
