<!-- src/components/Footer.vue -->
<template>
  <footer class="footer">
    <div class="foot"></div>
    <p>&copy; {{ currentYear }} Sandra Corp. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: #2c3e50; /* Dark footer background */
  background-image: linear-gradient(-90deg, #0f2f4e, #7f7e85);
  color: white;
  text-align: center;
  bottom: 0;
  width: 100%;
  height: 63.4px;
  font-size: 10px;
  align-items: center;
  position: relative; /* Ensure it's part of the normal document flow */
  display: flex;
  justify-content: center;
}
.footer a {
  color: #42b983;
  text-decoration: none;
}
.footer a:hover {
  text-decoration: underline;
}
.footer p {
  font-weight: 400;
}
.foot {
  display: flex;
}
</style>
