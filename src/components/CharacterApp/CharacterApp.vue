<template>
  <v-container>
    <character-info />
    <character-stats />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CharacterInfo from "@/components/CharacterInfo/CharacterInfo.vue";
import CharacterStats from "@/components/CharacterStats/CharacterStats.vue";

export default defineComponent({
  name: "CharacterApp",

  components: {
    CharacterInfo,
    CharacterStats,
  },
});
</script>
