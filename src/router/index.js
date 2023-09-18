import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import QuizView from "../views/QuizView.vue";
import SingleQuizView from "../views/SingleQuizView.vue";
import CreateQuizView from "../views/CreateQuizView.vue";

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
  {
    path: "/create",
    name: "create",
    component: CreateQuizView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
