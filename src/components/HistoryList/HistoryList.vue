<template>
  <div>
    <v-list v-if="items.length">
      <v-list-item
        v-for="item in items"
        :key="item.title"
        class="px-4 history-item"
      >
        <div class="d-flex">
          <div class="d-flex flex-column">
            <div class="d-flex align-center">
              <div class="text-subtitle-2 font-weight-bold">
                {{ item.title }}
              </div>
              <v-badge
                v-if="item.modify"
                :content="item.modify"
                color="red"
                inline
              ></v-badge>
            </div>
            <div class="text-caption">{{ item.list.join(", ") }}</div>
          </div>
          <v-chip class="ml-auto" color="red" label size="x-large">
            {{ item.value }}
          </v-chip>
        </div>
      </v-list-item>
    </v-list>
    <div class="d-flex justify-center" v-else>
      <h1>Пусто</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useCubeGenerator } from "@/stores";

export default defineComponent({
  name: "HistoryList",

  setup() {
    const cubeGeneratorStore = useCubeGenerator();
    const items = computed(() => {
      return cubeGeneratorStore.getMovesListRevert;
    });

    return {
      items,
    };
  },
});
</script>

<style lang="scss" scoped>
.history-item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:first-child {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
}
</style>
