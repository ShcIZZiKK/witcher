<template>
  <v-list-item
    v-for="item in items"
    :key="item.title"
    :value="item.title"
    class="px-6 border-b"
    @click.prevent="
      generateValue(
        item.parentValue ? item.parentValue : 0,
        item.value,
        item.title
      )
    "
  >
    <div class="w-100 d-flex align-center justify-space-between">
      {{ item.title }}
      <v-chip label color="red">
        {{ item.value }}
      </v-chip>
    </div>
  </v-list-item>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCubeGenerator } from "@/stores";

export default defineComponent({
  name: "ParameterRows",

  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  emits: ["generate"],

  setup(props, { emit }) {
    const cubeGeneratorStore = useCubeGenerator();

    const generateValue = (base: number, add: number, name: string) => {
      cubeGeneratorStore.generateRandomSkillValue(base, add, name);
      emit("generate");
    };

    return {
      generateValue,
    };
  },
});
</script>
