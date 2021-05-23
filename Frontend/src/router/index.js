import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import Profile from "@/components/Profile";
import SideSheet from "@/components/SideSheet"
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
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/SideSheet",
      name: "SideSheet",
      component: SideSheet
    }
  ]
});
