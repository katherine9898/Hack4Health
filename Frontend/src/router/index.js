import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/user/Main";
import Map from "@/components/map/Map";

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
