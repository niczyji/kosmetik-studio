import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import AboutUs from "@/views/AboutUs.vue";
import Services from "@/views/Services.vue";
import Prices from "@/views/Prices.vue";
import Gallery from "@/views/Gallery.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy.vue";
import TermsOfUse from "@/views/TermsOfUse.vue";
import Imprint from "@/views/Imprint.vue";
import GeneralConditions from "@/views/GeneralConditions.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about-us", name: "AboutUs", component: AboutUs },
  { path: "/services", name: "Services", component: Services },
  { path: "/prices", name: "Prices", component: Prices },
  { path: "/gallery", name: "Gallery", component: Gallery },
  { path: "/privacy-policy", name: "PrivacyPolicy", component: PrivacyPolicy },
  { path: "/terms-of-use", name: "TermsOfUse", component: TermsOfUse },
  { path: "/imprint", name: "Imprint", component: Imprint },
  { path: "/general-conditions", name: "GeneralConditions", component: GeneralConditions },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;