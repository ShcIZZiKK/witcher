<template>
  <v-row
    align="center"
    justify="space-between"
    no-gutters
    style="height: 120px"
  >
    <slot />
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CubeRow",
});
</script>
