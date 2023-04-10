<template>
  <v-container class="game-app">
    <v-text-field
      v-model="search"
      @change="filterParams"
      clearable
      label="Поиск"
      variant="outlined"
    ></v-text-field>

    <v-expansion-panels variant="accordion">
      <v-expansion-panel>
        <v-expansion-panel-title>
          <div class="text-subtitle-1">Удача/Опр.Навык/Скорость</div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-list class="pa-0">
            <parameter-rows :items="getCustomParams()" @generate="showPopup" />
          </v-list>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels class="mt-5" variant="accordion">
      <v-expansion-panel v-for="parameter in parameters" :key="parameter.title">
        <v-expansion-panel-title>
          <div class="d-flex align-center justify-space-between w-100">
            <div class="text-subtitle-1">{{ parameter.title }}</div>
            <v-chip label class="mr-2" color="red">
              {{ parameter.value }}
            </v-chip>
          </div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-list class="pa-0">
            <parameter-rows
              :items="getChildCompetencies(parameter.id, parameter.value)"
              @generate="showPopup"
            />
          </v-list>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

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
import { defineComponent, onMounted, computed, ref } from "vue";
import { useGameProcess, useCubeGenerator } from "@/stores";
import BottomMultiplier from "@/components/BottomMultiplier/BottomMultiplier.vue";
import CastView from "@/components/CastView/CastView.vue";
import ParameterRows from "@/components/GameApp/ParameterRows/ParameterRows.vue";
import PopupComponent from "@/components/PopupComponent/PopupComponent.vue";

export default defineComponent({
  name: "GameApp",

  components: {
    BottomMultiplier,
    CastView,
    ParameterRows,
    PopupComponent,
  },

  setup() {
    const gameProcessStore = useGameProcess();
    const cubeGeneratorStore = useCubeGenerator();
    const popup = ref<InstanceType<typeof PopupComponent>>();
    const definingSkill = computed(() => {
      return gameProcessStore.getDefiningSkill;
    });
    const parameters = computed(() => {
      return gameProcessStore.getParameters;
    });
    const independentParameters = computed(() => {
      return gameProcessStore.getIndependentParameters;
    });
    const competencies = computed(() => {
      return gameProcessStore.getCompetencies;
    });
    const generatedData = computed(() => {
      return cubeGeneratorStore.getLastMoveData;
    });

    onMounted(() => {
      gameProcessStore.fetchGameData();
    });

    const getChildCompetencies = (id: number, value: number) => {
      const filterItems = competencies.value.filter(
        (item) => item.parent === id
      );

      filterItems.forEach((item) => {
        item.parentValue = value;
      });

      return filterItems;
    };

    const getCustomParams = () => {
      return [definingSkill.value, ...independentParameters.value];
    };

    const showPopup = () => {
      popup.value?.showPopup();
    };

    const search = ref("");

    return {
      parameters,
      getCustomParams,
      getChildCompetencies,
      showPopup,
      generatedData,
      popup,
      search,
    };
  },
});
</script>

<style lang="scss">
.game-app {
  .v-expansion-panel-text__wrapper {
    padding: 0;
  }
}
</style>
