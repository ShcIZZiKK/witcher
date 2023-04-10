<template>
  <v-card>
    <v-card-text>
      <div class="text-body-1">{{ title }}</div>
      <div class="text-h1 text-center pa-1">{{ value }}</div>
      <div class="d-flex align-center justify-space-between">
        <div v-if="listCubes" class="text-body-2">
          {{ listCubes }}
        </div>
        <v-badge v-if="modify" :content="modify" inline></v-badge>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "CastView",

  props: {
    value: Number,
    title: String,
    modify: String,
    list: Array,
  },

  setup(props) {
    const { list } = toRefs(props);

    return {
      listCubes: list.value ? list.value.join(", ") : "",
    };
  },
});
</script>
