<template>
  <div class="h-100">
    <game-app />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GameApp from "@/components/GameApp/GameApp.vue";

export default defineComponent({
  name: "GamePage",

  components: {
    GameApp,
  },
});
</script>
