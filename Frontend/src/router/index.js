import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/user/Main";
import SideSheet from "@/components/user/SideSheet";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main
    },
    {
      path: "/SideSheet",
      name: "SideSheet",
      component: SideSheet
    }
  ]
});
