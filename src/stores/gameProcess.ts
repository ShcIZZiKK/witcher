import { defineStore } from "pinia";
import axios from "axios";

interface DefaultSkill {
  title: string;
  value: number;
}

interface ParameterItem {
  id: number;
  title: string;
  value: number;
}

interface CompetenciesItem {
  parent: number;
  title: string;
  value: number;
  parentValue: number;
}

interface StateGameProcess {
  definingSkill: DefaultSkill | null;
  parameters: Array<ParameterItem>;
  independentParameters: Array<DefaultSkill>;
  competencies: Array<CompetenciesItem>;
}

export const useGameProcess = defineStore("gameProcess", {
  state: (): StateGameProcess => {
    return {
      definingSkill: null,
      parameters: [],
      independentParameters: [],
      competencies: [],
    };
  },

  getters: {
    getDefiningSkill(state) {
      return state.definingSkill;
    },

    getParameters(state) {
      return state.parameters;
    },

    getIndependentParameters(state) {
      return state.independentParameters;
    },

    getCompetencies(state) {
      return state.competencies;
    },
  },

  actions: {
    async fetchGameData() {
      await axios.get("/api/game.json").then(({ data }) => {
        const {
          definingSkill,
          parameters,
          independentParameters,
          competencies,
        } = data.data;

        this.definingSkill = definingSkill;
        this.parameters = parameters;
        this.independentParameters = independentParameters;
        this.competencies = competencies;
      });
    },
  },
});
