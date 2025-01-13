<template>
  <HeaderComponent></HeaderComponent>
  <div class="page-container">
    <div class="contains">
      <router-view> </router-view>
    </div>
  </div>

  <FooterComponent></FooterComponent>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "./components/Header.vue";
import FooterComponent from "./components/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
