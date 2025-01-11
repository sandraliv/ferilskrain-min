<template>
  <header>
    <div class="logo" @click="redirectToHome" style="cursor: pointer">
      <img id="vue_logo" src="@/assets/logo.png" alt="Logo" />

      <div class="flexed">
        <h1>Sandra Liv Sigurðardóttir</h1>
        <p>3. ár tölvunarfræði</p>
      </div>
    </div>
    <nav>
      <ul class="nav-links">
        <li><a href="about_me">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="jobs">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  methods: {
    redirectToHome() {
      this.$router.push("/"); // Navigate to the home route
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50;
  background-image: linear-gradient(-90deg, #0f2f4e, #7f7e85);
  color: #fff;
  padding: 10px 20px; /* Adjust padding as needed */
  position: sticky;
  top: 0; /* Makes it stick to the top of the viewport */
  z-index: 1000;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 40px;
  margin-right: 10px;
}

.flexed {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align text to the left */
  margin: 0; /* Ensure no extra space is added */
  padding: 0; /* Ensure no extra space is added */
  gap: 2px; /* Space between h1 and p */
}

.flexed h1 {
  font-size: 1.2rem; /* Adjust font size */
  margin: 0;
  padding: 0;
}

.flexed p {
  font-size: 0.9rem; /* Adjust font size for subtitle */
  margin: 0;
  padding: 0;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 0;
}

.nav-links li a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.nav-links li a:hover {
  text-decoration: underline;
}
</style>
