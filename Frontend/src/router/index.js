import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import Map from "@/components/Map";
import Profile from "@/components/Profile";
import SideSheet from "@/components/SideSheet"

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
