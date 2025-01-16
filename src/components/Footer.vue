<!-- src/components/Footer.vue -->
<template>
  <footer class="footer">
    <div class="foot"></div>
    <p>&copy; {{ currentYear }} Sandra's Company. All rights reserved.</p>
    <nav>
      <a href="https://example.com/about" target="_blank">About</a> |
      <a href="https://example.com/contact" target="_blank">Contact</a> |
      <a href="https://example.com/privacy" target="_blank">Privacy Policy</a>
    </nav>
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
  background-image: linear-gradient(90deg, #2c3e50, #696485);
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

.foot {
  display: flex;
}
</style>
