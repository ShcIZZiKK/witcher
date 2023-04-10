<template>
  <v-sheet class="d-flex flex-column align-center h-100 pa-5" rounded>
    <div class="h-25 w-100">
      <game-logo class="h-100 w-100" />
    </div>
    <Transition mode="out-in">
      <v-card class="w-100 mt-5" v-if="stage === 1">
        <v-tabs v-model="tab" fixed-tabs>
          <v-tab value="one">Вход</v-tab>
          <v-tab value="two">Регистрация</v-tab>
        </v-tabs>

        <v-card-text class="h-100">
          <v-window class="h-100" v-model="tab">
            <v-window-item value="one">
              <login-form @submit="goToCharacterList" />
            </v-window-item>

            <v-window-item value="two">
              <registration-form @submit="goToCharacterList" />
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>

      <character-form class="mt-5" v-else />
    </Transition>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CharacterForm from "@/components/Forms/CharactersForm.vue";
import GameLogo from "@/components/Icons/GameLogo.vue";
import LoginForm from "@/components/Forms/LoginForm.vue";
import RegistrationForm from "@/components/Forms/RegistrationForm.vue";

export default defineComponent({
  name: "AuthorizationApp",

  components: {
    CharacterForm,
    GameLogo,
    LoginForm,
    RegistrationForm,
  },

  setup() {
    const tab = ref(null);
    const stage = ref(1);

    const goToCharacterList = () => {
      stage.value = 2;
    };

    return {
      stage,
      tab,
      goToCharacterList,
    };
  },
});
</script>
