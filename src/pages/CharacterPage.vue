<template>
  <div class="h-100">
    <character-app />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CharacterApp from "@/components/CharacterApp/CharacterApp.vue";

export default defineComponent({
  name: "CharacterPage",

  components: {
    CharacterApp,
  },
});
</script>
