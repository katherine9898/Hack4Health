import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import Map from "@/components/map/Map";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/map",
      name: "Map",
      component: Map
    }
  ]
});
