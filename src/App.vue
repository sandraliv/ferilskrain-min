<template>
  <HeaderComponent></HeaderComponent>
  <div class="page-container">
    <div class="contains" :style="dynamicStyle">
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
  data() {
    return {
      color: "#F5F3F5",
    };
  },
  computed: {
    where_am_i(): boolean {
      return this.$route.name === "Home";
    },
    dynamicStyle() {
      // Dynamically generate styles based on where i am
      return {
        backgroundImage: this.where_am_i ? "none" : "none",
        color: this.where_am_i ? this.color : "black",
      };
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
