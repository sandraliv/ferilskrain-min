<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <router-view></router-view>
    <!-- Dynamic content will render here -->
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import FooterComponent from './components/Footer.vue';
import HeaderComponent from './components/Header.vue';

export default {
  name: 'App',
  components: {
    FooterComponent,
    HeaderComponent,
  },
};
</script>

<style></style>
