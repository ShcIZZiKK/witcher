import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import CharacterPage from "@/pages/CharacterPage.vue";
import CubePage from "@/pages/CubePage.vue";
import GamePage from "@/pages/GamePage.vue";
import HistoryPage from "@/pages/HistoryPage.vue";
import LoginPage from "@/pages/LoginPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "game",
    component: GamePage,
    meta: {
      title: "Игра",
    },
  },
  {
    path: "/character",
    name: "character",
    component: CharacterPage,
    meta: {
      title: "Персонаж",
    },
  },
  {
    path: "/cube",
    name: "cube",
    component: CubePage,
    meta: {
      title: "Бросок кубика",
    },
  },
  {
    path: "/history",
    name: "history",
    component: HistoryPage,
    meta: {
      title: "История бросков",
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
    meta: {
      title: "Авторизация",
      login: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
