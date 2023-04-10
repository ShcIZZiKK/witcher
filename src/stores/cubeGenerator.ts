import { defineStore } from "pinia";
import { useMultiplier } from "@/stores/index";
import { checkSkillValue, getCubeValue } from "@/helpers/utils";

interface HistoryItem {
  title: string;
  value: number;
  modify: string;
  list: Array<number>;
}

interface CubeGenerator {
  currentValue: number;
  currentList: Array<number>;
  movesList: Array<HistoryItem>;
}

export const useCubeGenerator = defineStore("cubeGenerator", {
  state: (): CubeGenerator => {
    return {
      currentValue: 0,
      currentList: [],
      movesList: [],
    };
  },

  getters: {
    getLastMoveData(state) {
      const size = state.movesList.length;

      if (size) {
        return state.movesList[size - 1];
      }

      return null;
    },

    getMovesList(state) {
      return state.movesList;
    },

    getMovesListRevert(state) {
      return [...state.movesList].reverse();
    },
  },

  actions: {
    generateRandomCubeValue(cube: number) {
      const multiplierStore = useMultiplier();
      const getMultiplierCount = multiplierStore.getMultiplierCount;
      const getModify = multiplierStore.getModify;

      const { sum, list } = getCubeValue(cube, getMultiplierCount, getModify);
      const modifyText =
        getModify > 0 ? `+${getModify}` : getModify < 0 ? `${getModify}` : "";

      this.currentValue = sum;
      this.currentList = list;
      this.movesList.push({
        title: `Бросок кубика ${getMultiplierCount}d${cube}`,
        value: sum,
        modify: modifyText,
        list,
      });
    },

    generateRandomSkillValue(base: number, add: number, skillName: string) {
      const multiplierStore = useMultiplier();
      const getModify = multiplierStore.getModify;

      const { sum, list } = checkSkillValue({
        baseSkillValue: base,
        addSkillValue: add,
        modify: getModify,
      });

      const modifyText =
        getModify > 0 ? `+${getModify}` : getModify < 0 ? `${getModify}` : "";

      this.currentValue = sum;
      this.currentList = list;
      this.movesList.push({
        title: `${skillName} d10`,
        value: sum,
        modify: modifyText,
        list,
      });
    },
  },
});
