<template>
  <v-dialog v-model="dialog" width="auto">
    <slot />
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PopupComponent",

  setup() {
    const dialog = ref(false);
    const showPopup = () => {
      dialog.value = true;
    };

    const hidePopup = () => {
      dialog.value = false;
    };

    return {
      dialog,
      showPopup,
      hidePopup,
    };
  },
});
</script>
