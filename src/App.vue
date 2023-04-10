<template>
  <v-app>
    <v-layout>
      <template v-if="!isLoginPage">
        <v-app-bar :elevation="2">
          <template v-slot:prepend>
            <v-app-bar-nav-icon
              variant="text"
              @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
          </template>

          <v-app-bar-title>{{ title }}</v-app-bar-title>

          <v-btn @click="toggleTheme" icon="mdi-theme-light-dark"></v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" temporary>
          <v-list>
            <v-list-item
              v-for="(item, key) in navigation"
              :key="key"
              active-color="primary"
              @click="goToPage(item.link)"
            >
              <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
              </template>

              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </template>

      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useTheme } from "vuetify";

export default defineComponent({
  name: "App",

  setup() {
    const router = useRouter();
    const route = useRoute();
    const drawer = ref(false);
    const navigation = ref([
      { link: "/", title: "Игра", icon: "mdi-controller" },
      { link: "/character", title: "Персонаж", icon: "mdi-account" },
      { link: "/cube", title: "Кубик", icon: "mdi-cube-outline" },
      { link: "/history", title: "История", icon: "mdi-history" },
    ]);
    const goToPage = (page: string) => {
      router.push(page);
    };
    const title = computed(() => {
      return route?.meta?.title || "App";
    });
    const isLoginPage = computed(() => {
      return route?.meta?.login;
    });
    const theme = useTheme();

    const toggleTheme = () => {
      theme.global.name.value = theme.global.current.value.dark
        ? "light"
        : "dark";
    };

    return {
      drawer,
      navigation,
      goToPage,
      title,
      toggleTheme,
      isLoginPage,
    };
  },
});
</script>

<style lang="scss">
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 420px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
