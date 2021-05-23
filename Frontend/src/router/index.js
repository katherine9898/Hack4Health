import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import Map from "@/components/Map";
import SideSheet from "@/components/user/SideSheet"

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
    },
    {
      path: "/SideSheet",
      name: "SideSheet",
      component: SideSheet
    },
  ]
});
