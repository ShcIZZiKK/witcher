<template>
  <v-col align="center">
    <v-btn variant="text" height="auto" @click.prevent="generateValue(cube)">
      <div class="d-flex flex-column">
        <v-icon icon="mdi-cube-outline" size="60"></v-icon>
        <h3>{{ text }}</h3>
      </div>
    </v-btn>
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCubeGenerator } from "@/stores";

export default defineComponent({
  name: "CubeCol",

  props: {
    text: String,
    cube: {
      type: Number,
      default: 10,
    },
  },

  emits: ["generate"],

  setup(props, { emit }) {
    const cubeGeneratorStore = useCubeGenerator();

    const generateValue = (value: number) => {
      cubeGeneratorStore.generateRandomCubeValue(value);
      emit("generate");
    };

    return {
      generateValue,
    };
  },
});
</script>
