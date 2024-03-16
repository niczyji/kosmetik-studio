import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import AboutUs from "@/views/AboutUs.vue";
import Services from "@/views/Services.vue";
import Prices from "@/views/Prices.vue";
import Gallery from "@/views/Gallery.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about-us", name: "AboutUs", component: AboutUs },
  { path: "/services", name: "Services", component: Services },
  { path: "/prices", name: "Prices", component: Prices },
  { path: "/gallery", name: "Gallery", component: Gallery },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;