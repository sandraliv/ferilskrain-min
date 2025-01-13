import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/global.css";
import { createRouter, createWebHistory } from "vue-router";
import ForsidaComponent from "./components/Forsida.vue";
import SkolaComponent from "./components/Skolaferill.vue";
import FerillComponent from "./components/Ferill.vue";
import VueSmoothScroll from "vue3-smooth-scroll";
import globalMixins from "./mixins/globalMixins";
import i18n from "../i18n";

// Define your routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: ForsidaComponent, // Display ForsidaComponent for the "/" route
  },
  {
    path: "/jobs",
    name: "FerillComponent",
    component: FerillComponent, // Display ForsidaComponent for the "/" route
  },
  {
    path: "/skoli",
    name: "SkolaComponent",
    component: SkolaComponent, // Display ForsidaComponent for the "/" route
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode
  routes,
});

export default router;

// Mount the Vue app
const app = createApp(App);
app.use(router).use(VueSmoothScroll).use(i18n);
app.mixin(globalMixins);
app.mount("#app");
