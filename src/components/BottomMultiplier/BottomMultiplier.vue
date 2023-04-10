<template>
  <v-bottom-navigation
    class="d-flex justify-space-between bottom-multiplier position-fixed"
    grow
  >
    <div class="d-flex align-center justify-center bottom-multiplier__column">
      <v-icon
        class="bottom-multiplier__button"
        size="large"
        icon="mdi-minus-box"
        @click.prevent="subtractCubesCount"
      />
      <div class="bottom-multiplier__count">
        <h2>{{ cubesCount }}d</h2>
      </div>
      <v-icon
        class="bottom-multiplier__button"
        size="large"
        icon="mdi-plus-box"
        @click.prevent="addCubesCount"
      />
    </div>

    <div class="d-flex align-center justify-center bottom-multiplier__column">
      <v-icon
        class="bottom-multiplier__button"
        size="large"
        icon="mdi-minus-box"
        @click.prevent="subtractModifyCount"
      />
      <div class="bottom-multiplier__count">
        <h2>{{ modifyCount > 0 ? "+" : "" }}{{ modifyCount }}</h2>
      </div>
      <v-icon
        class="bottom-multiplier__button"
        size="large"
        icon="mdi-plus-box"
        @click.prevent="addModifyCount"
      />
    </div>
  </v-bottom-navigation>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useMultiplier } from "@/stores";

export default defineComponent({
  name: "BottomMultiplier",

  setup() {
    const multiplierStore = useMultiplier();
    const cubesCount = computed(() => {
      return multiplierStore.getMultiplierCount;
    });
    const modifyCount = computed(() => {
      return multiplierStore.getModify;
    });

    const addModifyCount = () => {
      multiplierStore.addModify();
    };

    const subtractModifyCount = () => {
      multiplierStore.subtractModify();
    };

    const addCubesCount = () => {
      multiplierStore.addMultiplierCount();
    };

    const subtractCubesCount = () => {
      multiplierStore.subtractMultiplierCount();
    };

    return {
      cubesCount,
      modifyCount,
      addModifyCount,
      subtractModifyCount,
      addCubesCount,
      subtractCubesCount,
    };
  },
});
</script>

<style lang="scss" scoped>
.bottom-multiplier__column {
  flex: 1;
}

.bottom-multiplier__button {
  padding: 30px;
}

.bottom-multiplier__count {
  width: 30px;
  min-width: 30px;
  text-align: center;
}
</style>
