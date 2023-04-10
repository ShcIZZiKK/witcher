<template>
  <v-card class="pb-3">
    <v-img
      class="bg-white"
      :aspect-ratio="1"
      src="https://i.imgur.com/JZPhYXy.png"
      cover
    ></v-img>
    <v-card-title>Расинант (Друид)</v-card-title>
    <v-card-subtitle>Нильфгард / Ангрен</v-card-subtitle>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CharacterInfo",
});
</script>
