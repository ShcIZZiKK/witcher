<template>
  <div>
    <v-card class="mt-5 pa-4">
      <v-row justify="space-between">
        <v-col class="d-flex flex-column align-center border-e">
          <div class="text-subtitle-1 mb-2">Здоровье</div>
          <v-progress-circular
            :rotate="360"
            :size="100"
            :width="15"
            :model-value="percentHealth"
            color="green"
          >
            {{ health }} / {{ maxHealth }}
          </v-progress-circular>
          <v-btn
            class="mt-2"
            @click.prevent="changeAction('healthDamage')"
            block
            >Урон</v-btn
          >
          <v-btn
            class="mt-1"
            @click.prevent="changeAction('healthRestore')"
            block
            >Востановить</v-btn
          >
        </v-col>

        <v-col class="d-flex flex-column align-center">
          <div class="text-subtitle-1 mb-2">Выносливость</div>
          <v-progress-circular
            :rotate="360"
            :size="100"
            :width="15"
            :model-value="percentStamina"
            color="blue"
          >
            {{ stamina }} / {{ maxStamina }}
          </v-progress-circular>
          <v-btn
            class="mt-2"
            @click.prevent="changeAction('staminaDamage')"
            block
            >Урон</v-btn
          >
          <v-btn
            class="mt-1"
            @click.prevent="changeAction('staminaRestore')"
            block
            >Востановить</v-btn
          >
        </v-col>
      </v-row>
    </v-card>

    <popup-component ref="popup">
      <v-card>
        <v-card-text>
          <v-text-field label="Размер" variant="outlined" v-model="value" />
          <v-btn @click.prevent="applyAction" block>Применить</v-btn>
        </v-card-text>
      </v-card>
    </popup-component>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import PopupComponent from "@/components/PopupComponent/PopupComponent.vue";

export default defineComponent({
  name: "CharacterStats",

  components: {
    PopupComponent,
  },

  setup() {
    const popup = ref<InstanceType<typeof PopupComponent>>();
    const health = ref(40);
    const stamina = ref(40);
    const maxHealth = ref(40);
    const maxStamina = ref(40);
    const value = ref(0);
    const action = ref("");

    const percentHealth = computed(() => {
      return (health.value / maxHealth.value) * 100;
    });

    const percentStamina = computed(() => {
      return (stamina.value / maxStamina.value) * 100;
    });

    const changeAction = (newAction: string) => {
      action.value = newAction;

      showPopup();
    };

    const showPopup = () => {
      popup.value?.showPopup();
    };

    const hidePopup = () => {
      popup.value?.hidePopup();
    };

    const applyAction = () => {
      const quantity = Number(value.value);

      if (!Number.isNaN(quantity)) {
        switch (action.value) {
          case "healthDamage":
            health.value -= quantity;

            if (health.value < 0) {
              health.value = 0;
            }
            break;
          case "healthRestore":
            health.value += quantity;

            if (health.value > maxHealth.value) {
              health.value = maxHealth.value;
            }
            break;
          case "staminaDamage":
            stamina.value -= quantity;

            if (stamina.value < 0) {
              stamina.value = 0;
            }
            break;
          case "staminaRestore":
            stamina.value += quantity;

            if (stamina.value > maxStamina.value) {
              stamina.value = maxStamina.value;
            }
            break;
        }
      }

      hidePopup();
    };

    return {
      maxHealth,
      maxStamina,
      health,
      stamina,
      percentHealth,
      percentStamina,
      popup,
      showPopup,
      hidePopup,
      value,
      applyAction,
      changeAction,
    };
  },
});
</script>
