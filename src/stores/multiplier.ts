import { defineStore } from "pinia";

interface StateMultiplier {
  multiplierCount: number;
  modify: number;
}

export const useMultiplier = defineStore("multiplier", {
  state: (): StateMultiplier => {
    return {
      multiplierCount: 1,
      modify: 0,
    };
  },

  getters: {
    getMultiplierCount(state) {
      return state.multiplierCount;
    },

    getModify(state) {
      return state.modify;
    },
  },

  actions: {
    addModify() {
      this.modify += 1;
    },

    subtractModify() {
      this.modify -= 1;
    },

    addMultiplierCount() {
      this.multiplierCount += 1;
    },

    subtractMultiplierCount() {
      if (this.multiplierCount === 1) {
        return;
      }

      this.multiplierCount -= 1;
    },
  },
});
