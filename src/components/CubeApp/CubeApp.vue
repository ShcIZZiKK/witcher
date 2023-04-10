<template>
  <v-container>
    <cube-row v-for="(items, itemKey) in cubes" :key="itemKey">
      <cube-col
        v-for="(cube, cubeKey) in items.items"
        :key="cubeKey"
        :text="cube.text"
        :cube="cube.value"
        @generate="showPopup"
      />
    </cube-row>

    <popup-component ref="popup">
      <cast-view
        :value="generatedData?.value"
        :title="generatedData?.title"
        :modify="generatedData?.modify"
        :list="generatedData?.list"
      />
    </popup-component>

    <bottom-multiplier />
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useCubeGenerator } from "@/stores";
import BottomMultiplier from "@/components/BottomMultiplier/BottomMultiplier.vue";
import CastView from "@/components/CastView/CastView.vue";
import CubeCol from "@/components/CubeApp/CubeCol/CubeCol.vue";
import CubeRow from "@/components/CubeApp/CubeRow/CubeRow.vue";
import PopupComponent from "@/components/PopupComponent/PopupComponent.vue";

export default defineComponent({
  name: "CubeApp",

  components: {
    BottomMultiplier,
    CastView,
    CubeCol,
    CubeRow,
    PopupComponent,
  },

  setup() {
    const cubeGeneratorStore = useCubeGenerator();
    const cubes = ref([
      {
        items: [
          { value: 4, text: "d4" },
          { value: 6, text: "d6" },
          { value: 8, text: "d8" },
        ],
      },
      {
        items: [
          { value: 10, text: "d10" },
          { value: 12, text: "d12" },
          { value: 20, text: "d20" },
        ],
      },
      {
        items: [{ value: 100, text: "d100" }],
      },
    ]);
    const tab = ref(null);
    const popup = ref<InstanceType<typeof PopupComponent>>();

    const generatedData = computed(() => {
      return cubeGeneratorStore.getLastMoveData;
    });

    const showPopup = () => {
      popup.value?.showPopup();
    };

    return {
      cubes,
      tab,
      generatedData,
      showPopup,
      popup,
    };
  },
});
</script>
