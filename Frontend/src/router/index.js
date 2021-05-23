import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/Main";
import Map from "@/components/Map";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main
    },
    {
      path: "/map",
      name: "Map",
      component: Map
    }
  ]
});
