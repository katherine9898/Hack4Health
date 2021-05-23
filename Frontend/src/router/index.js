import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/Index";
import Map from "@/components/Map";
import Profile from "@/components/Profile";
import SideSheet from "@/components/user/SideSheet"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Main
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
