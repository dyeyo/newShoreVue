import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Studentes from "../views/ListStudents.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/studentes/:house",
    name: "Studentes",
    component: Studentes
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
