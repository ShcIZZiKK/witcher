<template>
  <div class="h-100">
    <history-list />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HistoryList from "@/components/HistoryList/HistoryList.vue";

export default defineComponent({
  name: "HistoryPage",

  components: {
    HistoryList,
  },
});
</script>
