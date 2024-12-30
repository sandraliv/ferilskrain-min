import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/global.css';
import { createRouter, createWebHistory } from 'vue-router';
import ForsidaComponent from './components/Forsida.vue';
import HelloWorld from './components/HelloWorld.vue';

// Define your routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: ForsidaComponent, // Display ForsidaComponent for the "/" route
  },
  {
    path: '/about_me',
    name: 'HelloWorld',
    component: HelloWorld, // Display ForsidaComponent for the "/" route
  },

];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode
  routes,
});

// Mount the Vue app
createApp(App).use(router).mount('#app');
