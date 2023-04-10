<template>
  <v-card class="w-100">
    <v-card-text>
      <div class="text-button font-weight-bold text-center">
        Выберите персонажа
      </div>
      <v-select
        class="mt-2"
        label="Персонаж"
        variant="outlined"
        v-model="character"
        :items="['Рассинант / Ведьмак', 'Хитрый лис / Друид']"
      ></v-select>
      <v-btn
        :disabled="!character"
        append-icon="mdi-motion-play-outline"
        color="red"
        size="large"
        variant="elevated"
        block
        @click.prevent="goToGame"
        >Играть</v-btn
      >

      <hr class="mt-5" />

      <div class="text-button font-weight-bold text-center mt-3">
        Или создайте нового
      </div>
      <v-btn
        prepend-icon="mdi-plus"
        color="red"
        size="large"
        variant="elevated"
        class="mt-2"
        block
        >Создать</v-btn
      >
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "CharactersForm",

  setup() {
    const router = useRouter();
    const character = ref(null);
    const goToGame = () => {
      router.push("/character");
    };

    return {
      character,
      goToGame,
    };
  },
});
</script>
