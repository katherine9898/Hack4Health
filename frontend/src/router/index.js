import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import Map from "@/components/Map";
import SideSheet from "@/components/SideSheet";
import Booking from "@/components/booking";

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
      path: "/booking",
      name: "Booking",
      component: Booking
    },
    {
      path: "/SideSheet",
      name: "SideSheet",
      component: SideSheet
    }
  ]
});
