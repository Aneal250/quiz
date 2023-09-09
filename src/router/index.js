import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import QuizView from "../views/QuizView.vue";
import SingleQuizView from "../views/SingleQuizView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/single-quiz",
    name: "single-quiz",
    component: QuizView,
  },
  {
    path: "/quiz/:id",
    name: "quiz",
    component: SingleQuizView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
