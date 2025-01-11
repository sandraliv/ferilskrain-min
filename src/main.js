import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/global.css";
import { createRouter, createWebHistory } from "vue-router";
import ForsidaComponent from "./components/Forsida.vue";
import HelloWorld from "./components/HelloWorld.vue";
import FerillComponent from "./components/Ferill.vue";
import VueSmoothScroll from "vue3-smooth-scroll";
import globalMixins from "./mixins/globalMixins";

// Define your routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: ForsidaComponent, // Display ForsidaComponent for the "/" route
  },
  {
    path: "/about_me",
    name: "HelloWorld",
    component: HelloWorld, // Display ForsidaComponent for the "/" route
  },
  {
    path: "/jobs",
    name: "FerillComponent",
    component: FerillComponent, // Display ForsidaComponent for the "/" route
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode
  routes,
});

// Mount the Vue app
const app = createApp(App);
app.use(router).use(VueSmoothScroll);
app.mixin(globalMixins);
app.mount("#app");
