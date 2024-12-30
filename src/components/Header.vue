<template>
    <header class="header">
      <div class="logo" @click="redirectToHome" style="cursor: pointer;">
        <img id="vue_logo" src="@/assets/logo.png" alt="Logo" />

        <div class="flexed">
            <h1>Sandra Liv Sigurðardóttir</h1>
            <p>3. ár tölvunarfræði
            </p>
        </div>

      </div>
      <nav>
        <ul class="nav-links">
          <li><a href="about_me">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
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
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2c3e50;
    color: #fff;
    padding: 10px 20px;
  }
  
  .logo {
    display: flex;
    align-items: center;
  }
  
  .logo img {
    height: 40px;
    margin-right: 10px;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 15px;
    margin: 0;
    padding: 0;
  }
   
  header .flexed {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .header h1, p {
    margin: 0;
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
  